import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Events } from "ionic-angular";

/*
  Generated class for the ShoppingCartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingCartProvider {

  public urlCar: string;
  public urlAdd:string;
  public urlRemove:string;
  public urlInCart: string;
  private count : number =0;

  constructor(public http: Http, public events: Events,) {
    console.log('Hello ShoppingCartProvider Provider');
    this.urlCar = "http://byw.from-tn.com/pwm/api/shopping_carts";
    this.urlInCart ="http://byw.from-tn.com/pwm/api/in_shopping_cart";
    this.urlAdd ="http://byw.from-tn.com/pwm/api/add_in_cart";
    this.urlRemove = "http://byw.from-tn.com/pwm/api/remove_in_cart";
  }

  getShoppingCarts(token){
    let headers = new Headers({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.get(this.urlCar,{headers:headers}).map(res=>res.json());
  }  
  getCountInShoppingCart(token){
    let headers = new Headers({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.urlInCart,{headers:headers}).map(res=>res.json());
  }

  addProduct(product_id,qty,token){
    let params = {
      barrica: product_id,
      cantidad: qty
    };
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    this.events.publish('shopping', ++this.count);
    return this.http.post(this.urlAdd,params,{headers:headers}).map(res=>res.json());
  }

  removeProduct(product_id, token){
    let params ={
      _method:'DELETE',
      barrica: product_id
    };
    let headers = new Headers({
      "Content-Type": "application/json",
      'Accept': "application/json",
      'Authorization': "Bearer " + token
    });
    this.events.publish('shopping', ++this.count);
    return this.http.post(this.urlRemove,params,{headers:headers}).map(res=>res.json());
  }

}
