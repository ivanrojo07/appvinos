import { MarcaPage } from './../marca/marca';
import { UvaPage } from './../uva/uva';
import { NgForm } from '@angular/forms';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoresProvider, UvasProvider, MarcaProvider } from '../../providers/providers';
import { Storage } from "@ionic/storage";
import { ProductorPage } from '../productor/productor';
import { Usuario } from '../../models/usuario';
import { BarricaPage } from '../barrica/barrica';

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
  public barricas : Barrica[]=[
    { id: 1, title:"Roble Frances", description:"Aromatico", image:"assets/img/roble_frances.jpg"  },
    { id:2, title:"Roble Americano", description:"Aumenta el sabor", image:"assets/img/roble_americano.jpg"}
  ];
  public productores: Productor[];
  public marcas : Marca[]
  public usuario: Usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uvasProvider: UvasProvider,
    private productoresProvider:ProductoresProvider,
    private marcaProvider:MarcaProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
  ) {
    this.uvas = [];
    // this.barricas = [];
    this.productores = [];
    this.marcas = [];
    this.usuario = navParams.get('usuario');
    
  }
  ngOnInit(){
    this.getUvas();
    this.getProductores();
    
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    if (form.valid) {
      this.alert('Creado', 'Tú orden se ha hecho');
      this.navCtrl.pop();
    } else {
      
    }
  }
  regresar(){
    this.navCtrl.pop();
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
    console.log(productor);
    this.navCtrl.push(ProductorPage,{productor:productor,usuario:this.usuario});
  }

  getMarcas(productor:any){
    console.log(productor);
    this.marcas = [];
    this.marcaProvider.getMarcas().subscribe(res=>{
      // this.marcas = res.marcas;
      res.marcas.forEach(element => {
        if (element.vinicola_id == productor.id) {
          this.marcas.push(element);
        }
      });
      console.log(this.marcas);
    });
  }
  marcaDetail(marca:Marca){
    console.log(marca);
    console.log(this.usuario);
    this.navCtrl.push(MarcaPage,{marca:marca,usuario:this.usuario});
  }
  barricaDetail(barrica:Barrica){
    console.log(barrica);
    this.navCtrl.push(BarricaPage,{barrica:barrica})
  }
  alert(titulo: string, contenido: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWineFormPage');
  }

}