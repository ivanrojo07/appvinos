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
  public var_token:any;
  constructor(
    public http: Http,
    private storage:Storage,
  ) {
    this.storage.get("access_token").then((val)=>{
      this.var_token = JSON.parse(val);
    });
    // console.log(this.authorization);
    console.log('Hello TarjetaProvider Provider');
    this.url = 'http://byw.from-tn.com/pwm/api/cards';
  }

  getTarjetas(){
    console.log(this.var_token);
    let headers = new Headers({
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Authorization" : "Bearer "+this.var_token
    });
    console.log(headers);
    return this.http.get(this.url,{ headers : headers }).map(res=>res.json());
  }



}
