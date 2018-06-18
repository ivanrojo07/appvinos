import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoresProvider, UvasProvider, MarcaProvider } from '../../providers/providers';

export interface Barricas{
  id: number,
  title: string,
  description: string,
  image: string,
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private uvasProvider: UvasProvider,
    private productoresProvider:ProductoresProvider,
    private marcaProvider:MarcaProvider,
    private storage: Storage,
  ) {
  }
  ngOnInit(){
    this.getUvas();
    this.getProductores();
    
  }
  getUvas(){
    // TODO
  }
  getProductores(){
    // TODO
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyWineFormPage');
  }

}
