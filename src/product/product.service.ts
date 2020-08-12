import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './domain/product';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: ReturnModelType<typeof Product>,
  ) {}

  async createProduct(product: Product) {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }

  async getProducts(): Promise<Product[] | null> {
    return await this.productModel.find().exec();
  }

  async getSingleProduct(productId: number) {
    const product = await this.productModel.findOne({ id: productId }).exec();
    return product;
  }

  async updateProduct(id: number, product: Product) {
    const updatedProduct = await this.productModel.findOne({ id }).then(p => {
      return p.updateOne(product).exec();
    });

    return updatedProduct;
  }

  async deleteProduct(productId: number) {
    const result = await this.productModel.deleteOne({ id: productId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find product.');
    }
  }
}
