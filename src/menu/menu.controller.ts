import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './interfaces/menu.interface';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}

    @Post()
    create(@Body() createMenuDto: CreateMenuDto): void {
        const menu: Menu = createMenuDto;
        this.menuService.create(menu);
    }

    @Get()
    findAll(): Menu[] {
        return this.menuService.findAll();
    }
}
