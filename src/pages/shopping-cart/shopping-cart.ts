import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ShoppingCartProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html',
  providers:[ShoppingCartProvider]
})
export class ShoppingCartPage {

  public myShoppingCart: any;
  public user: any;
  public formEnvio:boolean=false;
  public zip_code:number;
  public envio:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl:LoadingController,
    private storage: Storage,
    private shoppingProvider:ShoppingCartProvider,
    ) {
      this.myShoppingCart= {};
      this.user={};
      this.zip_code=0;
      this.envio = 0.00;
  }

  ionViewDidLoad() {
    this.getShoppingCart();
    console.log('ionViewDidLoad ShoppingCartPage');
  }
  ionViewWillEnter(){
    this.getShoppingCart();
    console.log('ionViewWillEnter');
  }

  getShoppingCart(){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      this.shoppingProvider.getShoppingCarts(token).
        subscribe(res => {
          console.log(res);
          this.myShoppingCart = res['myShoppingCart'];
          this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
          this.user=res['user'];
        }, err => {
          console.log(err);
        });
    });
  }
  removeQty(producto){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      let qty = producto.pivot.cantidad;
      let id = producto.id;
      if(qty >1){
        let loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          content: 'Actualizando...'
        });
        loading.present();
        this.shoppingProvider.addProduct(id, -1, token).subscribe(res => {
          this.myShoppingCart = res['myShoppingCart'];
          this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
          loading.dismiss();
        }, error => {
          loading.dismiss();
          console.log(error);
        });
      }

    }); 
  }
  addQty(producto){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      let id = producto.id;
      
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Actualizando...'
      });
      loading.present();
      this.shoppingProvider.addProduct(id, "1", token).subscribe(res => {
        this.myShoppingCart = res['myShoppingCart'];
        this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
        loading.dismiss();
      }, error => {
        loading.dismiss();
        console.log(error);
      });

    }); 
  }
  eliminar(producto){
    this.storage.get('access_token').then(val => {
      let token = JSON.parse(val);
      let id = producto.id;

      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Actualizando...'
      });
      loading.present();
      this.shoppingProvider.removeProduct(id, token).subscribe(res => {
        this.myShoppingCart = res['myShoppingCart'];
        this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
        loading.dismiss();
      }, error => {
        loading.dismiss();
        console.log(error);
      });

    }); 
  }
  calcularEnvio(zip_code){
    console.log(zip_code);
    if (zip_code !=""){
      this.envio = 10.50;
      this.formEnvio = !this.formEnvio;
    }
  }

}
