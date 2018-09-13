import { ProductosPage } from './../productos/productos';
import { SellProvider } from './../../providers/providers';
import { UvasPage } from './../uvas/uvas';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
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
  providers: [SellProvider],
})
export class MyWineFormPage implements OnInit {

  public usuario: Usuario;
  public uvas: any[];
  public tipo_barrs: any[];
  public tostados: any[];
  public bodegas: any[];
  public bodega:any[];
  public selects: any[];
  public form: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    private sellProvider:SellProvider,
  ) {
    this.usuario = navParams.get('usuario');
    this.form = {uva:'',bodega_id:'',tipo_bar:'', tostado:''};
    this.selects = [
      { nombre: 'uva', img: "assets/img/opcion1.jpg", value: false, select: false }, 
      { nombre: 'barrica', img:"assets/img/barricas.jpeg", value: false, select: false },
      { nombre: 'bodega', img:'assets/img/botellas.jpeg', value: false, select: false }
    ];
    this.bodegas = [];
    this.bodega=[];
  }
  ngOnInit(){
    this.onChanges();
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
      });
    });
  }
  cancelar(){
    this.form = { uva: '', bodega_id: '', tipo_bar: '', tostado: '' };
    this.selects = [
      { nombre: 'uva', img: "assets/img/opcion1.jpg", value: false, select: false },
      { nombre: 'barrica', img: "assets/img/barricas.jpeg", value: false, select: false },
      { nombre: 'bodega', img: 'assets/img/botellas.jpeg', value: false, select: false }
    ];
    this.bodega = [];
  }

  uvasDetail(){
    this.navCtrl.push(UvasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWineFormPage');
  }

}