import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule, MongooseModule.forRoot('mongodb://localhost:27017/tabe-reduce')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
