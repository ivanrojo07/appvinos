import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ShoppingCartProvider } from '../../providers/providers';
import { Usuario } from "../../models/usuario";
import { Storage } from '@ionic/storage';
import { ProductoPage } from "../producto/producto";

/**
 * Generated class for the ShoppingCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-shopping-cart",
  templateUrl: "shopping-cart.html",
  providers: [ShoppingCartProvider]
})
export class ShoppingCartPage {
  public myShoppingCart: any;
  public user: Usuario;
  public formEnvio: boolean = false;
  public zip_code: number;
  public envio: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private shoppingProvider: ShoppingCartProvider
  ) {
    this.myShoppingCart = {};
    this.user = new Usuario(null, "", "", "", "", "", "", "");
    this.zip_code = 0;
    this.envio = 0.0;
  }

  ionViewDidLoad() {
    this.getShoppingCart();
    console.log("ionViewDidLoad ShoppingCartPage");
  }
  ionViewWillEnter() {
    this.getShoppingCart();
    console.log("ionViewWillEnter");
  }

  getShoppingCart() {
    this.storage.get("access_token").then(val => {
      let token = JSON.parse(val);
      this.shoppingProvider.getShoppingCarts(token).subscribe(
        res => {
          console.log(res);
          this.myShoppingCart = res["myShoppingCart"];
          this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
          this.getUser(res['user']);
          
          console.log(this.user);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  getUser(response){
    this.user.nombre = response.name;
    this.user.apaterno = response.appaterno;
    this.user.amaterno= response.apmaterno;
    this.user.fechanac= response.nacimiento;
    this.user.telefono=response.numero_telefono;
  }
  removeQty(producto) {
    this.storage.get("access_token").then(val => {
      let token = JSON.parse(val);
      let qty = producto.pivot.cantidad;
      let id = producto.id;
      if (qty > 1) {
        let loading = this.loadingCtrl.create({
          spinner: "bubbles",
          content: "Actualizando..."
        });
        loading.present();
        this.shoppingProvider.addProduct(id, -1, token).subscribe(
          res => {
            this.myShoppingCart = res["myShoppingCart"];
            this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
            loading.dismiss();
          },
          error => {
            loading.dismiss();
            console.log(error);
          }
        );
      }
    });
  }
  addQty(producto) {
    this.storage.get("access_token").then(val => {
      let token = JSON.parse(val);
      let id = producto.id;

      let loading = this.loadingCtrl.create({
        spinner: "bubbles",
        content: "Actualizando..."
      });
      loading.present();
      this.shoppingProvider.addProduct(id, "1", token).subscribe(
        res => {
          this.myShoppingCart = res["myShoppingCart"];
          this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
          loading.dismiss();
        },
        error => {
          loading.dismiss();
          console.log(error);
        }
      );
    });
  }
  eliminar(producto) {
    this.storage.get("access_token").then(val => {
      let token = JSON.parse(val);
      let id = producto.id;

      let loading = this.loadingCtrl.create({
        spinner: "bubbles",
        content: "Actualizando..."
      });
      loading.present();
      this.shoppingProvider.removeProduct(id, token).subscribe(
        res => {
          this.myShoppingCart = res["myShoppingCart"];
          this.myShoppingCart.total = parseFloat(this.myShoppingCart.total);
          loading.dismiss();
        },
        error => {
          loading.dismiss();
          console.log(error);
        }
      );
    });
  }
  calcularEnvio(zip_code) {
    console.log(zip_code);
    // TODO
    if (zip_code != "") {
      this.envio = 10.5;
      this.formEnvio = !this.formEnvio;
    }
  }
  openBarrica(barrica) {
    this.navCtrl.push(ProductoPage, {
      barrica: barrica,
      usuario: this.user
    });
  }
}
