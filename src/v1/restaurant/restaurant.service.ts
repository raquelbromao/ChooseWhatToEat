import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './model/restaurant.model';
import { Model } from 'mongoose';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<Restaurant>,
  ) {}

  async getAll() {
    return await this.restaurantModel.find();
  }

  async findById(id: string): Promise<Restaurant> {
    return await this.restaurantModel.findById(id);
  }

  async create(document: Restaurant): Promise<string> {
    const result = await new this.restaurantModel(document).save();
    return 'Restaurant inserted:\n' + JSON.stringify(result);
  }

  async delete(id: string): Promise<string> {
    const result = await this.restaurantModel.findByIdAndDelete(id);
    if (!result) return 'restaurant not found';
    return 'Restaurant found and deleted:\n' + JSON.stringify(result);
  }

  async choose(id: string): Promise<string> {
    return `Restaurant ${id} returned`;
  }
}
