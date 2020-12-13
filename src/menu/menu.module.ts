import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { Menu, MenuSchema } from './schemas/menu.schema';

const MongoMenuModule = MongooseModule.forFeature([
    { name: Menu.name, schema: MenuSchema },
]);

@Module({
    imports: [MongoMenuModule],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
