import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './entity/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }
}
