import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BodegaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BodegaProvider {

  public url: string;
  
  constructor(public http: Http) {
    console.log('Hello BodegaProvider Provider');
    this.url ='http://byw.from-tn.com/pwm/api/bodegas';
  }
  
  getBodegas(){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get(this.url,{headers:headers}).map(res=>res.json());
  }

}
