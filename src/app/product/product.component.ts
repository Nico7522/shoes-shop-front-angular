import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { Product } from '../fake-data/interfaces/product-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this._productService
      .getProduct()
      // .pipe(map((p) => p.slice(1, 3)))
      .subscribe((p) => (this.productList = p));
  }
}
