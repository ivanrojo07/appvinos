import { BarricaProvider } from './../../providers/barrica/barrica';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Usuario } from "../../models/usuario";

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
  providers: [BarricaProvider]
})
export class ProductosPage implements OnInit {
  public barrica: any[];
  public usuario: Usuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    private storage: Storage,
    private barricaProvider: BarricaProvider,
  ) {
  }
  
  ngOnInit(){
    let barr_view = this.navParams.get("barrica");
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.barricaProvider.getBarrica(barr_view['id'],token).subscribe(res=>{
        this.barrica = res.barrica;
        console.log(this.barrica);
      },err=>{});
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
        <strong>Vinicola : ${vinicola.nombre}</strong>  
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

}
