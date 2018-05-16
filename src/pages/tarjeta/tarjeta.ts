import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';

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
    private tarjetaProvider: TarjetaProvider,
    public storage:Storage,
  ) {
    this.tarjetas = [];
  }

  ngOnInit(){
    this.storage.get("access_token").then((val)=>{
      let token = JSON.parse(val);
      this.tarjetaProvider.getTarjetas(token).subscribe(result => {
        console.log(result);
        this.tarjetas = [];
      },
        error => {
          console.log("Error " + JSON.stringify(error));
        });
    });

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaPage');
  }

}
