import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './interfaces/menu.interface';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}

    @Post()
    async create(@Body() createMenuDto: CreateMenuDto) {
        const menu: Menu = createMenuDto;
        const created = await this.menuService.create(menu);

        return created;
    }

    @Get()
    async findAll(): Promise<Menu[]> {
        return await this.menuService.findAll();
    }
}
