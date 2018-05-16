import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Tarjeta } from '../../models/tarjeta';
import { Storage } from '@ionic/storage';
// import { Events } from 'ionic-angular';

/*
  Generated class for the TarjetaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TarjetaProvider {

  public url: string;
  public tarjeta: Tarjeta;

  constructor(
    public http: Http,
  ) {
    
    // console.log(this.authorization);
    console.log('Hello TarjetaProvider Provider');
    this.url = 'http://byw.from-tn.com/pwm/api/cards';
  }

  getTarjetas(token){
    console.log(token);
    let headers = new Headers({
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Authorization" : "Bearer "+token
    });
    console.log(headers);
    return this.http.get(this.url,{ headers : headers }).map(res=>res.json());
  }

  setTarjeta(token, formulario){
    let params = formulario;
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer "+token
    });
    console.log(headers);
    return this.http.post(this.url,params,{headers:headers}).map(res=>res.json());
  }



}
