import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({ timestamps: true })
export class Item extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
