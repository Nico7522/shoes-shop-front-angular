import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../fake-data/interfaces/product-interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  topProduct: Product[] = [];

  ngOnInit(): void {
    this._productService
      .getProduct()
      .pipe(map((products) => products.slice(0, 3)))
      .subscribe((products) => (this.topProduct = products));
  }
}
