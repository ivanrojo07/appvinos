import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContrasenaPage } from './contrasena';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    ContrasenaPage,
  ],
  imports: [
    IonicPageModule.forChild(ContrasenaPage),
    IonicStorageModule.forRoot(),
  ],
})
export class ContrasenaPageModule {}
