import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantService {
  getRestaurants(): string {
    return 'All restaurants returned';
  }

  insertRestaurant(): string {
    return 'Restaurant inserted';
  }

  deleteRestaurant(): string {
    return 'Restaurant deleted';
  }

  chooseRestaurant(): string {
    return 'Restaurant chosen returned';
  }
}
