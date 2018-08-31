import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuntosCorchosProvider } from '../../providers/providers';

/**
 * Generated class for the PuntosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntos',
  templateUrl: 'puntos.html',
  providers: [PuntosCorchosProvider]
})
export class PuntosPage implements OnInit {

  public misCupones: any[];
  public cupones: any[];
  public messageError: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage,
    public puntosProvider:PuntosCorchosProvider
  ) {
    this.misCupones = [];
    this.cupones = [];

  }

  ngOnInit(){
    this.misCupones=[];
    this.cupones=[];
    this.messageError=null;
    this.showCupones();
  }

  ionViewWillEnter(){
   this.ngOnInit();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosPage');
  }

  showCupones(){
    this.storage.get('access_token').then(res=>{
      let token = JSON.parse(res);
      this.puntosProvider.getCodigos(token).subscribe(res=>{
        console.log(res);
      },error=>{
        console.log(error);
      });
    })
  }

}
