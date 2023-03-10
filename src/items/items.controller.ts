import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create.item.dto';
import { ItemsService } from './items.service';
import { Item } from './interface/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemService.delete(id);
  }
}
