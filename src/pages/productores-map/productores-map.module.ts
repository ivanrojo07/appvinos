import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoresMapPage } from './productores-map';

@NgModule({
  declarations: [
    ProductoresMapPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoresMapPage),
  ],
})
export class ProductoresMapPageModule {}
