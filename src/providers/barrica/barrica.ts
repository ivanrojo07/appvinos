import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BarricaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarricaProvider {

  public url: string;

  constructor(public http: Http) {
    this.url = 'http://byw.from-tn.com/pwm/api/barricas';
    console.log('Hello BarricaProvider Provider');
  }

  getBarricas(token){
    let headers = new Headers({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'Authorization':'Bearer '+token
    });
    return this.http.get(this.url,{headers:headers}).map(res=>res.json());
  }

  getBarrica(barrica_id,token){
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
      
    });
    return this.http.get(this.url+'/'+barrica_id,{headers:headers}).map(res=>res.json());
  }

}
