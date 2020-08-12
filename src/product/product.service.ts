import { Injectable } from '@nestjs/common';
import { Product } from './domain/product';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: ReturnModelType<typeof Product>,
  ) {}

  async createCustomProduct(product: Product) {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  async listProducts(): Promise<Product[] | null> {
    return await this.productModel.find().exec();
  }
}
