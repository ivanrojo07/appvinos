import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SellProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SellProvider {

  public urlSearch:string;
  constructor(public http: Http) {
    console.log('Hello SellProvider Provider');
    this.urlSearch = "http://byw.from-tn.com/pwm/api/mivino";
  }

  myWineForm(params,token){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post(this.urlSearch,params,{headers:headers}).map(res=>res.json());
  }

}
