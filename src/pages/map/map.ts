import { GoogleMap, Marker, GoogleMapOptions, GoogleMaps } from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export interface Productor {
  id: number,
  nombre: string,
  distinciones: string,
  inicio: string,
  filosofia: string,
  locacion: string,
  enologo: string,
  wine_maker: string,
  long: number,
  lat: number,
  telefono: number,
}
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public productor : Productor;
  public map: GoogleMap;
  public marker: Marker;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productor = navParams.get('productor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
    
  }
  loadMap() {
    // this.showProductores();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.productor.lat,
          lng: this.productor.long
        },
        zoom: 15,
        tilt: 30
      }
    }
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // this.showProductores();


    // marker.showInfoWindow();


    this.map.addMarker({
      title: this.productor.nombre,
      icon: './assets/img/pwmicono.png',
      animation: 'DROP',
      position: {
        lat: this.productor.lat,
        lng: this.productor.long
      }
    }).then((marker: Marker) => { marker.showInfoWindow() });


  }

}

