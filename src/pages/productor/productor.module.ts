import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductorPage } from './productor';

@NgModule({
  declarations: [
    ProductorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductorPage),
  ],
})
export class ProductorPageModule {}
