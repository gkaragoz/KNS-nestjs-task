import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypegooseModule } from 'nestjs-typegoose';
import 'dotenv/config';

console.log(process.env);

@Module({
  imports: [
    TypegooseModule.forRoot(process.env.MONGO_URI, { useFindAndModify: false }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
