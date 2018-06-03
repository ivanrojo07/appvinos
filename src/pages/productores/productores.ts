import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, 
  Marker } from '@ionic-native/google-maps';
import { ProductoresProvider } from '../../providers/providers';
/**
 * Generated class for the ProductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface productores{
  id: number,
  nombre: string,
  distinciones: string,
  inicio: number,
  filosofia: string,
  locacion: string,
  long: number,
  lat: number,
  enologo: string,
  wine_maker: string,
  contacto: string,
  puesto: string,
  correo: string,
  celular: string,
  telefono: string,
  observaciones: string,
  fecha_observacion: string,
}

@IonicPage()
@Component({
  selector: 'page-productores',
  templateUrl: 'productores.html',
  providers: [ProductoresProvider]
})
export class ProductoresPage implements OnInit {

  map: GoogleMap;
  productores: productores[];
  messageError: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productoresProvider: ProductoresProvider, public alertCtrl: AlertController,) {
    this.productores = [];
    this.productoresProvider.getProductores().subscribe(result => {
      this.productores = result.vinicolas;
      this.productores.forEach(productor => {
        this.alert('Vinicola:', productor.lat.toString());
      })
    }, error => {
      this.messageError = JSON.parse(error._body)
      console.log("Error " + JSON.stringify(this.messageError));
    });
  }
  ngOnInit(){
    this.showProductores();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoresPage');
    // this.showProductores();
    this.loadMap();
  }

  showProductores(){
    
  }
  
  loadMap(){
    let mapOptions : GoogleMapOptions = {
      camera: {
        target: {
          lat: 19.432608,
          lng: -99.133209
        },
        zoom: 10,
        tilt: 30
      }
    }
    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    // this.showProductores();
    for (let vinicola of this.productores) {
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 19.498152811951056+vinicola.id,
          lng: -99.1275487497262+vinicola.id
        }
      });
      
    }

    // marker.showInfoWindow();

    this.productores.forEach(productor=>{
      let marker: Marker = this.map.addMarkerSync({
        title: productor.nombre,
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: productor.lat,
          lng: productor.long
        }
      });

      marker.showInfoWindow();

    });
    
      
    

  }
  public alert(titulo: string, contenido: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

}
