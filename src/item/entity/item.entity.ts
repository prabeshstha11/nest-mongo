import { Prop, Schema } from '@nestjs/mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;
}
