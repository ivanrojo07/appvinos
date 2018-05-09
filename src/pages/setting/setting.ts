import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  { title: "Cambiar Contraseña", component: ""},
  { title: "Tarjetas", component: ""}  
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
