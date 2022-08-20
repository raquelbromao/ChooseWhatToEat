import { Injectable } from '@nestjs/common';
import { RestaurantDTO } from './dto/restaurant.dto';

@Injectable()
export class RestaurantService {
  getAll(): string {
    return 'All restaurants returned';
  }

  insert(restaurantDTO: RestaurantDTO): string {
    return 'Restaurant inserted:\n' + JSON.stringify(restaurantDTO);
  }

  delete(id: string): string {
    return `Restaurant ${id} deleted`;
  }

  choose(id: string): string {
    return `Restaurant ${id} returned`;
  }
}
