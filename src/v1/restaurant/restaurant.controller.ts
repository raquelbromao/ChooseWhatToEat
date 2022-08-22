import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './model/restaurant.model';

@Controller('/restaurant')
//TODO: fix headers and insert body
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  getAll() {
    return this.restaurantService.getAll();
  }

  @Post('/create')
  insert(@Body() restaurant: Restaurant): Promise<string> {
    return this.restaurantService.create(restaurant);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string): Promise<string> {
    return this.restaurantService.delete(id);
  }

  @Get('/:id')
  find(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantService.findById(id);
  }
}
