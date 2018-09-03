import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the PuntosCorchosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PuntosCorchosProvider {

  public url: string;
  constructor(public http: Http) {
    console.log('Hello PuntosCorchosProvider Provider');
    this.url = 'http://byw.from-tn.com/pwm/api/puntos_corchos';
    // this.url = "http://localhost/vinos_backend/public/api/puntos_corchos";

  }

  getCodigos(token){
    let headers = new Headers({
      "Content-Type": "application/json",
      'Accept': "application/json",
      'Authorization':
        "Bearer "+token
    });
    return this.http.get(this.url,{headers:headers}).map(res=>res.json());
  }

  getCodigo(token){
    let params = {}
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post(this.url,params,{headers:headers}).map(res=>res.json())
  }

  setCodigo(token,form){
    let params={
      codigo:form
    };
    let headers = new Headers({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post(this.url+'/check',params,{headers:headers}).map(res=>res.json());
  }
}
