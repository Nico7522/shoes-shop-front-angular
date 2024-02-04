import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddSizesComponent } from './add-sizes/add-sizes.component';


@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    AddCategoriesComponent,
    AddSizesComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
