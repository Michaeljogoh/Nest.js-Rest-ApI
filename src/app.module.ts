import { Module } from '@nestjs/common';

import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import  Config  from './config/keys';


@Module({
  imports: [ItemsModule , MongooseModule.forRoot(Config.MongoURI)],
})
export class AppModule {}
