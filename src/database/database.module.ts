import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/item/entity/item.entity';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Config module loads .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
})
export class DatabaseModule {}
