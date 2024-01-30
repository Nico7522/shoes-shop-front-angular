import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs';
import { Product } from '../fake-data/interfaces/product-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productList: Product[] = [];
  array: string[] = ['sqq', 'dqd'];
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._productService
      .getProduct()
      // .pipe(map((p) => p.slice(1, 3)))
      .subscribe((p) => (this.productList = p));
  }

  next(): void {
    this._router.navigate(['/'], { queryParams: { categories: this.array } });
  }
}
