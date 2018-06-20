import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarricaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barrica',
  templateUrl: 'barrica.html',
})
export class BarricaPage {
  public barrica: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.barrica = navParams.get('barrica');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarricaPage');
  }

}
