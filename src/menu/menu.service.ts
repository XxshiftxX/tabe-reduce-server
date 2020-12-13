import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Menu as IMenu } from './interfaces/menu.interface';
import { Menu, MenuDocument } from './schemas/menu.schema';

@Injectable()
export class MenuService {

    constructor(@InjectModel(Menu.name) private menuModel: Model<MenuDocument>) {}

    async create(menu: IMenu): Promise<IMenu> {
        const created = new this.menuModel(menu);

        return created.save();
    }

    async findAll(): Promise<IMenu[]> {
        return this.menuModel.find().exec();
    }
}
