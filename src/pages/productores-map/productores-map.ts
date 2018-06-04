import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, 
  Marker } from '@ionic-native/google-maps';
import { Productores } from "../../models/productores";
import { ProductoresProvider } from '../../providers/providers';

/**
 * Generated class for the ProductoresMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productores-map',
  templateUrl: 'productores-map.html',
  providers: [ProductoresProvider]
})
export class ProductoresMapPage {

  map: GoogleMap;
  marker: Marker
  productores: Array<Productores>;
  messageError: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productoresProvider: ProductoresProvider) {
    this.productores = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoresMapPage');
    this.loadMap();
  }

  loadMap() {
    // this.showProductores();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 19.432608,
          lng: -99.133209
        },
        zoom: 3,
        tilt: 30
      }
    }
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // this.showProductores();


    // marker.showInfoWindow();

    this.productoresProvider.getProductores().subscribe(result => {
      this.productores = result.vinicolas;
      // this.alert('Vinicola:', this.productores.length.toString());
      this.productores.forEach(productor => {
        this.map.addMarker({
          title: productor.nombre,
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: productor.lat,
            lng: productor.long
          }
        }).then((marker: Marker) => { marker.showInfoWindow() });
      });
    }, error => {
      this.messageError = JSON.parse(error._body)
      console.log("Error " + JSON.stringify(this.messageError));
    });

  }

}
