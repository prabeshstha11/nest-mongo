import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './entity/item.entity';
import { Model } from 'mongoose';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async create(item: Partial<Item>): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }
}
