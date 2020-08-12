import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addProduct(@Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product);
  }

  @Get(':id')
  async getProduct(@Param('id') prodId: string): Promise<Product | null> {
    return await this.productService.getSingleProduct(prodId);
  }

  @Get()
  async getAllProducts(): Promise<Product[] | null> {
    const products = await this.productService.getProducts();
    return products;
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product | null> {
    return await this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: number) {
    await this.productService.deleteProduct(prodId);
  }
}
