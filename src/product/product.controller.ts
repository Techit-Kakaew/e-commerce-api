import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Product } from './product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() product: Product): Observable<Product> {
    return this.productService.createProduct(product);
  }

  @Get()
  findAll(): Observable<Product[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<Product> {
    return this.productService.findOneProduct(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() product: Product,
  ): Observable<UpdateResult> {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.productService.deleteProduct(id);
  }
}
