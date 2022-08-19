import { Controller, Delete, Get, Post } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller()
//TODO: fix headers and insert body
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  getRestaurants(): string {
    return this.restaurantService.getRestaurants();
  }

  @Post()
  insertRestaurant(): string {
    return this.restaurantService.insertRestaurant();
  }

  @Delete()
  deleteRestaurant(): string {
    return this.restaurantService.deleteRestaurant();
  }

  @Get()
  chooseRestaurant(): string {
    return this.restaurantService.chooseRestaurant();
  }
}
