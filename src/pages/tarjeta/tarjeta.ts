import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaProvider } from '../../providers/providers';

/**
 * Generated class for the TarjetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjeta',
  templateUrl: 'tarjeta.html',
  providers: [TarjetaProvider],
})
export class TarjetaPage {

  public tarjetas: Array<Tarjeta>;
  // public tarjeta: Tarjeta;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tarjetaProvider: TarjetaProvider
  ) {
    this.tarjetas = [];
  }

  ngOnInit(){
    this.tarjetaProvider.getTarjetas().subscribe(result=>{
      console.log(result);
      this.tarjetas = [ ];
    },
    error=>{
      console.log("Error "+JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaPage');
  }

}
