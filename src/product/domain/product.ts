import { prop } from '@typegoose/typegoose';

export class Product {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  link: string;

  @prop()
  price: string;

  @prop()
  currency: string;

  @prop()
  quantity: number;

  @prop()
  brand: string;

  @prop()
  color: string;

  @prop()
  gender: string;

  @prop()
  gtin?: string;

  @prop()
  mpn?: string;

  @prop()
  condition: string;
}
