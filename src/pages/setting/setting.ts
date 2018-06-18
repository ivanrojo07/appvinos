import { UserFormPage } from './../user-form/user-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContrasenaPage } from '../contrasena/contrasena';
import { TarjetaPage } from '../tarjeta/tarjeta';
import { DomicilioFiscalPage } from '../domicilio-fiscal/domicilio-fiscal';
import { DomicilioEnvioPage } from '../domicilio-envio/domicilio-envio';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface PageInterface{
  title: string;
  component: any;
}

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage {

 SettingPages: PageInterface[]=[
  { title: "Cambiar Contraseña", component: ContrasenaPage},
  { title: "Domicilio Fiscal", component:DomicilioFiscalPage },
  { title: "Domicilio de entrega", component:DomicilioEnvioPage},
  { title: "Tarjetas", component: TarjetaPage},
  { title:"Editar Perfil", component: UserFormPage},
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  openPage(page: PageInterface){
    this.navCtrl.push(page.component);
  }

}
