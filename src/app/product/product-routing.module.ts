import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddSizesComponent } from './add-sizes/add-sizes.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  {
    path: 'create',
    component: CreateProductComponent,
    children: [
      { path: 'addcategories', component: AddCategoriesComponent },
      { path: 'addsizes', component: AddSizesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
