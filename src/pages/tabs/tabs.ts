import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ShoppingCartPage } from './../shopping-cart/shopping-cart';
import { ShoppingCartProvider } from './../../providers/providers';
import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { OrdensPage } from "../ordens/ordens";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  providers:[ShoppingCartProvider]
})
export class TabsPage {

  public home: any;
  public shoppingcart: any;
  public ordens: any;
  public myshoppingcart: any;
  public inshoppingcart: number;
  public ordenes: number;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private storage: Storage,
    private shoppingProvider: ShoppingCartProvider,
    ) {
    this.home = UserPage;
    this.shoppingcart= ShoppingCartPage;
    this.ordens= OrdensPage;
    this.inshoppingcart =0;
    this.ordenes = 0;
    this.listenEvents();
  }

  ionViewDidLoad() {
    this.getShoppingCart();
  console.log('ionViewDidLoad TabsPage');
  }

  getShoppingCart(){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.shoppingProvider.getShoppingCarts(token).
        subscribe(res => {
          console.log(res);
          this.myshoppingcart = res['myShoppingCart'];
          this.ordenes = res['compras'].length;
          this.inshoppingcart = this.myshoppingcart['in_shopping_cart'].length;
        }, err => {
          console.log(err);
        });
    });
  }
  listenEvents(){
    this.events.subscribe('shopping', (count) => {
      console.log(count);
      this.getShoppingCart();
    })
  }


}
