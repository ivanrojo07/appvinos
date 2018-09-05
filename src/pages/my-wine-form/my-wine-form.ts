import { SellProvider } from './../../providers/sell/sell';
import { UvaPage } from './../uva/uva';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoresProvider, UvasProvider } from '../../providers/providers';
import { Storage } from "@ionic/storage";
import { ProductorPage } from '../productor/productor';
import { Usuario } from '../../models/usuario';
import { BarricaPage } from '../barrica/barrica';
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
  providers: [UvasProvider,  ProductoresProvider, SellProvider],
})
export class MyWineFormPage implements OnInit {
  @ViewChild('formMiVino')form:NgForm;

  public usuario: Usuario;
  public uvas: any[];
  public productores:any[];
  public tipo_barrs: any[];
  public tostados: any[];
  public barricas : number;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uvasProvider: UvasProvider,
    private productoresProvider:ProductoresProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    private sellProvider:SellProvider,
  ) {
    this.usuario = navParams.get('usuario');
    this.uvas=[]
    this.productores=[];
    this.tipo_barrs=[
      {tipo_bar: 'Americana'},
      { tipo_bar: 'Bosques de europa central' },
      { tipo_bar: 'Europeo' }
    ];
    this.tostados = [
      {tipo: 'Alto'},
      {tipo: 'Medio'},
      {tipo: 'ligero'}
    ];
    this.barricas = 0;
    
  }
  ngOnInit(){
    this.onChanges();
    this.getUvas();
    this.getProductores();
    console.log(this.form.value);
  }
  onChanges(){
    this.form.valueChanges.subscribe(val=>{
      let params = val;
      this.storage.get('access_token').then(val => {
        let token = JSON.parse(val);
        this.sellProvider.myWineForm(params, token).subscribe(res => {
          this.barricas = res.barricas.length;
          console.log(this.barricas);
        }, err => {
          console.log(err);
        })
      })
    })
  }
  onSubmit(form:NgForm){
    // console.log(form.value);
    // if (form.valid) {
    //   this.alert('Creado', 'Tú orden se ha hecho');
    //   this.navCtrl.pop();
    // } else {
      
    // }
  }
  regresar(){
    this.navCtrl.pop();
  }
  getUvas(){
    this.uvasProvider.getUvas().subscribe(res=>{
      console.log(res.uvas);
      this.uvas = res.uvas;
    },error=>{
      console.log(error);
    });
  }
  uvaDetail(uva){
    console.log(uva);
    this.navCtrl.push(UvaPage,{uva:uva});
    
  }
  getProductores(){
    this.productoresProvider.getProductores().subscribe(res=>{
      this.productores = res.vinicolas;
      console.log(this.productores);
      
    })
  }
  productorDetail(productor){
    console.log(productor);
    this.navCtrl.push(ProductorPage,{productor:productor,usuario:this.usuario});
  }

  

  // barricaDetail(barrica:Barrica){
  //   console.log(barrica);
  //   this.navCtrl.push(BarricaPage,{barrica:barrica})
  // }
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