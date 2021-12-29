import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductEntity } from './product.entity';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  createProduct(product: Product): Observable<Product> {
    return from(this.productRepository.save(product));
  }

  findAllProducts(): Observable<Product[]> {
    return from(this.productRepository.find());
  }

  findOneProduct(id: number): Observable<Product> {
    return from(this.productRepository.findOne(id));
  }

  updateProduct(id: number, product: Product): Observable<UpdateResult> {
    return from(this.productRepository.update(id, product));
  }

  deleteProduct(id: number): Observable<DeleteResult> {
    return from(this.productRepository.delete(id));
  }
}
