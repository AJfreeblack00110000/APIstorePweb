import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {path:"",redirectTo:"catalogue",pathMatch:"full"},
  {path:"catalogue",component:CatalogueComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"add-product",component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
