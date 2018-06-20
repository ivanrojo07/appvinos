import { UvaPage } from './../uva/uva';
import { NgForm } from '@angular/forms';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductoresProvider, UvasProvider, MarcaProvider } from '../../providers/providers';
import { Storage } from "@ionic/storage";
import { ProductorPage } from '../productor/productor';

export interface Barrica{
  id: number,
  title: string,
  description: string,
  image: string,
}
export interface Uva{
  id: number,
  title: string,
  subtitle: string,
  image: string,
  olfato: string,
  gusto: string,
  vista: string,
  maridaje: string,
}
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
 * Generated class for the MyWineFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-wine-form',
  templateUrl: 'my-wine-form.html',
  providers: [UvasProvider, MarcaProvider, ProductoresProvider],
})
export class MyWineFormPage implements OnInit {

  public uvas : Uva[];
  public barricas : Barrica[];
  public productores: Productor[];
  public marcas : Marca[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uvasProvider: UvasProvider,
    private productoresProvider:ProductoresProvider,
    private marcaProvider:MarcaProvider,
    private storage: Storage,
    public modalCtrl: ModalController,
  ) {
    this.uvas = [];
    this.barricas = [];
    this.productores = [];
    this.marcas = [];
  }
  ngOnInit(){
    this.getUvas();
    this.getProductores();
    
  }
  onSubmit(form:NgForm){
    
  }
  getUvas(){
    this.uvasProvider.getUvas().subscribe(res=>{
      // console.log(res.uvas);
      this.uvas = res.uvas;
    },error=>{
      console.log(error);
    });
  }
  uvaDetail(uva){
    console.log(uva);
    this.navCtrl.push(UvaPage,{uva:uva});
    // const modal = this.modalCtrl.create(UvaPage,{uva:uva});
    // modal.present();
  }
  getProductores(){
    this.productoresProvider.getProductores().subscribe(res=>{
      this.productores = res.vinicolas;
      // console.log(this.productores);
      
    })
  }
  productorDetail(productor){
    // console.log(productor);
    this.navCtrl.push(ProductorPage,{productor:productor});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWineFormPage');
  }

}
