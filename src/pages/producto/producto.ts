import { vinicola } from './../../models/vinicola';
import { enologo } from './../../models/enologo';
import { bodega } from './../../models/bodega';
import { barrica } from './../../models/barrica';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Usuario } from "../../models/usuario";
import { ShoppingCartProvider, BarricaProvider } from '../../providers/providers';
/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
  providers: [ShoppingCartProvider, BarricaProvider]
})
export class ProductoPage {

  public barrica: barrica;
  public bodega: bodega;
  public enologo: enologo;
  public vinicola: vinicola;
  public usuario: Usuario;
  private currentNumber = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private barricaProvider: BarricaProvider,
    private shoppingProvider: ShoppingCartProvider,
  ) {
    // this.barrica={};
    // this.bodega={};
    // this.enologo={};
    // this.vinicola={};
  }

  ngOnInit() {
    let barr_view = this.navParams.get("barrica");
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.barricaProvider.getBarrica(barr_view['id'], token).subscribe(res => {
        this.barrica = res.barrica;
        console.log(this.barrica);
        this.bodega = this.barrica.bodega;
        console.log(this.bodega);
        this.enologo = this.barrica.enologo;
        console.log(this.enologo);
        this.vinicola = this.barrica.vinicola;
        console.log(this.vinicola);
      }, err => { });
    });
    this.usuario = this.navParams.get("usuario");
  }

  verProductor(vinicola) {
    let alert = this.alertCtrl.create({
      title: `${vinicola.nombre}`,
      message:
      `<ion-card>
    <ion-card-content>
      <p>
        <strong>${vinicola.tipo} : ${vinicola.nombre}</strong>  
      </p>
      <p>
        <strong>Desde : ${vinicola.inicio}</strong> 
      </p>
      ${vinicola.distinciones != null ? '<p><strong> Distinciones : ' + vinicola.distinciones + '</strong></p>' : ''} 
      <p>
        <strong>Nuestra Filosofia : ${vinicola.filosofia}</strong> 
      </p>
      <p>
        <strong>Locación : ${vinicola.locacion}</strong> 
      </p>
      <p><strong>Telefono : ${vinicola.telefono}</strong></p>
      ${vinicola.enologo != null ? '<p><strong> Nuestro Enologo : ' + vinicola.enologo + '</strong></p>' : ''}
      ${vinicola.wine_maker != null ? '<p><strong> Nuestro Wine Maker : ' + vinicola.wine_maker + '</strong></p>' : ''} 
      
    </ion-card-content>
  </ion-card>`,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    if (this.currentNumber > 1) {
      this.currentNumber--;

    }
  }

  addBarrica(barrica){
    let loading = this.loadingCtrl.create({
      spinner:'bubbles',
      content:'Agregando barrica...'
    });
    loading.present();
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      let id = barrica.id;
      this.shoppingProvider.addProduct(id,this.currentNumber,token).subscribe(res=>{
        loading.dismiss();
        this.alertCtrl.create({
          title:'Barrica agregada a tu carrito',
          subTitle:'Accede a la pestaña "Mi Carrito" para continuar con tu compra',
          buttons:['Cerrar']
        }).present();
       
      },error=>{
        loading.dismiss();
        console.log(error);
      });

    })
  }

}
