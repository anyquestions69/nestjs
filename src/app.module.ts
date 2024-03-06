import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item } from './item/entities/item.entity';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';

@Module({
  imports: [Item],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
