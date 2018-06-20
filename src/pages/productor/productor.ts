import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


export interface Productor{
  id: number,
  nombre:string,
  distinciones:string,
  inicio:string,
  filosofia:string,
  locacion:string,
  enologo:string,
  wine_maker:string,
  long:number,
  lat:number,
  telefono:number,
}
/**
 * Generated class for the ProductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productor',
  templateUrl: 'productor.html',
})
export class ProductorPage {

  public productor : Productor;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productor = navParams.get('productor');
    console.log(this.productor);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductorPage');
    
    
  }

  openMap(){
    this.navCtrl.push(MapPage,{productor:this.productor});
  }

  

}
