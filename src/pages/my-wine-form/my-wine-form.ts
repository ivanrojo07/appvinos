import { ProductosPage } from './../productos/productos';
import { BodegaProvider } from './../../providers/providers';
import { SellProvider } from './../../providers/providers';
import { UvasPage } from './../uvas/uvas';
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
  providers: [UvasProvider,  ProductoresProvider, SellProvider, BodegaProvider],
})
export class MyWineFormPage implements OnInit {
  // @ViewChild('formMiVino')form:NgForm;

  public usuario: Usuario;
  public uvas: any[];
  // public productores:any[];
  public tipo_barrs: any[];
  public tostados: any[];
  // public barricas : number;
  public bodegas: any[];
  public bodega:any[];
  public selects: any[];
  public form: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uvasProvider: UvasProvider,
    private productoresProvider:ProductoresProvider,
    private storage: Storage,
    public alertCtrl: AlertController,
    private sellProvider:SellProvider,
    private bodegaProvider:BodegaProvider,
  ) {
    this.usuario = navParams.get('usuario');
    this.form = {uva:'',bodega_id:'',tipo_bar:'', tostado:''};
    this.selects = [
      { nombre: 'uva', value: false, select: false }, 
      { nombre: 'barrica', value: false, select: false },
      { nombre: 'bodega', value: false, select: false }
    ];
    this.bodegas = [];
    this.bodega=[];
  }
  ngOnInit(){
    this.onChanges();
    // this.getUvas();
    // this.getProductores();
    // this.getBodegas();
    // console.log(this.form);
  }
  seleccionar(select){
    this.selects.forEach(select => {
      select.select = false;
    });
    select.select = true;
    this.onChanges();
    console.log('activa');
  }
  setUva(uva){
    this.form.uva = uva;
    this.selects[0].value = true;
    this.onChanges();
  }
  setBarrica(barrica){
    this.form.tipo_bar = barrica;
    this.onChanges();
  }
  setTostado(tostado){
    this.form.tostado = tostado;
    this.selects[1].value = true;
    this.onChanges();
  }
  setBodega(bodega){

    this.form.bodega_id= bodega.id;
    this.bodega=bodega;
    this.selects[2].value = true;
    this.onChanges();
  }
  onChanges(){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.sellProvider.myWineForm(this.form, token).subscribe(res => {
        console.log(res);
        this.uvas = res.uvas;
        this.tipo_barrs = res.tipo_bars;
        this.tostados = res.tostados;
        this.bodegas = res.bodegas;
      }, err => {
        console.log(err);
      })
    })
  }
  onSubmit(form){
    console.log(form);
    let params = form;
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.sellProvider.myWineForm(params, token).subscribe(res => {
        this.navCtrl.push(ProductosPage,{'barricas':res.barricas});
      }, err => {
        console.log(err);
      })
    })
    if (form.valid) {
      this.alert('Creado', 'Tú orden se ha hecho');
      this.navCtrl.pop();
    } else {
      
    }
  }
  cancelar(){
    this.form = { uva: '', bodega_id: '', tipo_bar: '', tostado: '' };
    this.selects = [
      { nombre: 'uva', value: false, select: false },
      { nombre: 'barrica', value: false, select: false },
      { nombre: 'bodega', value: false, select: false }
    ];
    this.bodega = [];
  }
  // getUvas(){
  //   this.uvasProvider.getUvas().subscribe(res=>{
  //     console.log(res.uvas);
  //     this.uvas = res.uvas;
  //   },error=>{
  //     console.log(error);
  //   });
  // }
  uvasDetail(){
    this.navCtrl.push(UvasPage);
    
  }
  // getProductores(){
  //   this.productoresProvider.getProductores().subscribe(res=>{
  //     this.productores = res.vinicolas;
  //     console.log(this.productores);
      
  //   })
  // }
  // productorDetail(productor){
  //   console.log(productor);
  //   this.navCtrl.push(ProductorPage,{productor:productor,usuario:this.usuario});
  // }
  // getBodegas(){
  //   this.bodegaProvider.getBodegas().subscribe(res=>{
  //     console.log(res);
  //     this.bodegas = res.bodegas;
  //   },err=>{
  //     console.log(err)
  //   });
  // }

  

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