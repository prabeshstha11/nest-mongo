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

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findById(id).exec();
  }

  async update(id: string, item: Partial<Item>): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<Item> {
    return this.itemModel.findByIdAndDelete(id).exec();
  }
}
