import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantSchema } from './restaurant/schema/restaurant.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forRoot(
      'mongodb+srv://admin:UoJ7M8nwu3cz3lco@todolistcluster0.v2s1w.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: 'Restaurant',
        schema: RestaurantSchema,
      },
    ]),
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class AppV1Module {}
