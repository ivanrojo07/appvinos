import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UvasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UvasProvider {

  public url: string;

  constructor(public http: Http) {
    console.log('Hello UvasProvider Provider');
    this.url = "http://byw.from-tn.com/pwn/api/uvas";
  }

  getUvas(){
    let headers = new Headers({
      'Content-Type' : "application/json",
      'Accept' : "application/json"
    });
    return this.http.get(this.url,{headers:headers}).map(res=>res.json());
  }

}
