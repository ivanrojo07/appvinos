import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface Uva {
  id: number,
  title: string,
  subtitle: string,
  image: string,
  olfato: string,
  gusto: string,
  vista: string,
  maridaje: string,
}

/**
 * Generated class for the UvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uva',
  templateUrl: 'uva.html',
})
export class UvaPage {
  
  public uva:Uva;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uva = navParams.get("uva");
    console.log(this.uva);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UvaPage');
  }

}
