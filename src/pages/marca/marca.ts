import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Marca } from '../../models/marca';
import { Usuario } from "../../models/usuario";
/**
 * Generated class for the MarcaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marca',
  templateUrl: 'marca.html',
})
export class MarcaPage implements OnInit {
  public marca: Marca;
  public usuario: Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // this.marca = navParams.get('marca');
  }
  ngOnInit(){
    this.marca = this.navParams.get('marca');
    this.usuario = this.navParams.get('usuario');
    console.log(this.marca);
  }
  verProductor(vinicola){
    let alert = this.alertCtrl.create({
      title: '${vinicola.nombre}',
      message: `<ion-card>
    <ion-card-content>
      <p>
        <strong>Vinicola: ${vinicola.nombre}</strong>  
      </p>
      <p>
        <strong>Desde: ${vinicola.inicio}</strong> 
      </p>
      <p *ngIf="${vinicola.distinciones} == "hfh"">
        <strong>Distinciones: ${vinicola.distinciones}</strong> 
      </p>
      <p>
        <strong>Nuestra filosofia: ${vinicola.filosofia}</strong> 
      </p>
      <p>
        <strong>Locación: ${vinicola.locacion}</strong> 
      </p>
      <p>
        <strong>Nuestro enologo: ${vinicola.enologo}</strong> 
      </p>
      <p>
        <strong>Nuestro wine maker: ${vinicola.wine_maker}</strong> 
      </p>
      
    </ion-card-content>

  </ion-card>`,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarcaPage');
  }

}
