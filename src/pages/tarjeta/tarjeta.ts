import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarjeta } from '../../models/tarjeta';
import { TarjetaProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { TarjetaFormPage } from '../tarjeta-form/tarjeta-form';

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
export class TarjetaPage implements OnInit {

  public tarjetas: Tarjeta[];
  public messageError: any;
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
    this.showTarjetas();
  }
  
  showTarjetas(){
    this.storage.get("access_token").then((val)=>{
      let token = JSON.parse(val);
      this.tarjetaProvider.getTarjetas(token).subscribe(result => {
        console.log(result);
        this.tarjetas = result.tarjetas;
        console.log(this.tarjetas);
      },
        error => {
          this.messageError = JSON.parse(error._body)
          console.log("Error " + JSON.stringify(this.messageError));
          
        });
    });
  }
  
  openForm(){
    console.log("abre formulario");
    this.navCtrl.push(TarjetaFormPage);
  }
  ionViewWillEnter(){
    console.log("hola tarjeta");
    this.ngOnInit();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetaPage');
  }

}
