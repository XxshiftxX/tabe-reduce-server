import { Injectable } from '@nestjs/common';
import { Menu } from './interfaces/menu.interface';

@Injectable()
export class MenuService {
    private readonly menus: Menu[] = [];

    create(menu: Menu) {
        this.menus.push(menu);
    }

    findAll() {
        return this.menus;
    }
}
