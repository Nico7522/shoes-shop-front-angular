import { Injectable } from '@angular/core';
import { Products } from '../fake-data/product-data';
import { Observable, of } from 'rxjs';
import { Product } from '../fake-data/interfaces/product-interface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(): Observable<Product[]> {
    return of(Products);
  }
}
