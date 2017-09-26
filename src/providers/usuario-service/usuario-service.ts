import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario';

/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  public url: string;  

  constructor(public _http: Http) {
    console.log('Hello UsuarioServiceProvider Provider');
    this.url= 'http://localhost:3000/api/';
  }

  login(usuario: Usuario){
    let json= JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.post(this.url+'login',params,{headers:headers}).map(res=>res.json());

  }

  addUsuario(usuario:Usuario){
    let json = JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'usuario',params,{headers:headers}).map(res=>res.json());
  }

}
