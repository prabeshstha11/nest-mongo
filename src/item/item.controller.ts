import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './entity/item.entity';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.update(id, item);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Item> {
    return this.itemService.delete(id);
  }
}
