import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWineFormPage } from './my-wine-form';

@NgModule({
  declarations: [
    MyWineFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWineFormPage),
  ],
})
export class MyWineFormPageModule {}
