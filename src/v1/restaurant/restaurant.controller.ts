import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantDTO } from './dto/restaurant.dto';

@Controller('/restaurant')
//TODO: fix headers and insert body
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  getAll(): string {
    return this.restaurantService.getAll();
  }

  @Post('/insert')
  insert(@Body() restaurantDTO: RestaurantDTO): string {
    return this.restaurantService.insert(restaurantDTO);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string): string {
    return this.restaurantService.delete(id);
  }

  @Get('/:id')
  choose(@Param('id') id: string): string {
    return this.restaurantService.choose(id);
  }
}
