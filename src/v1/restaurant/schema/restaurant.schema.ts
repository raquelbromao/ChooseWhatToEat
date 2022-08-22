import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Restaurant extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  type: string;
  @Prop()
  stars: number;
  @Prop()
  location: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
