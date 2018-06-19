// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../models/usuario';

import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';



/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  public url: string;
  public oauthUrl: string;
  public usuario: Usuario;
  public var_token:any;

  HAS_LOGGED_IN = "hasLoggedIn";
  

  constructor(
    public _http: Http,
    private storage:Storage,
    public events: Events,
  ) {
    this.storage.get('access_token').then((val)=>{
      this.var_token = JSON.parse(val);
      
    });
    console.log(this.var_token);
    console.log('Hello UsuarioServiceProvider Provider');
    this.url = 'http://byw.from-tn.com/pwm/api/';
    this.oauthUrl = 'http://byw.from-tn.com/pwm/oauth/token';

  }

  login(usuario: Usuario){
    let json= JSON.stringify(usuario);
    let params = json;
    console.log(params);
    let user = JSON.parse(params)

    let headers = new Headers({
      "Content-Type":"application/json",
      "Accept": "application/json"
    });
    let postData = {
      grant_type: "password",
      client_id: 2,
      client_secret: "cco4KUfmpARVltxrK8eNazkc2BFs5IZuULOzI81y",
      username: user.email,
      password: user.password,
      scope: ""
    };
    console.log(postData);

    return this._http.post(this.oauthUrl, JSON.stringify(postData), {
      headers: headers
    }).map((res:Response)=> res.json());


    // return this._http.post(this.url+'login',params,{headers:headers}).map(res=>res.json());

  }

  logginData(token: string, refresh:string):void{
    this.storage.set("access_token",JSON.stringify(token));
    this.storage.set("refresh_token", JSON.stringify(refresh));
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.events.publish("user:login");
  }

  addUsuario(usuario:Usuario){
    let json = JSON.stringify(usuario);
    let params = json;

    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'users',params,{headers:headers}).map(res=>res.json());
  }

  getUsuario(access_token:string){
    let headers = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer "+JSON.parse(access_token)
    });
    return this._http.get(this.url+"user",{ headers: headers }).map(res => res.json());
  }

  estaLogeado() : Promise <boolean>{
    return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
      return value === true;
    });
  }

  logout():void{
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove("access_token");
    this.storage.remove("refresh_token");
    this.events.publish("user:logout");
  }
  
  changePass(params:any){
    console.log(this.var_token);
    let json = JSON.stringify(params);
    let headers = new Headers({
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Authorization" : "Bearer "+this.var_token,
    });
    console.log(headers);
    console.log(params);
    return this._http.post(this.url+"password",json,{headers:headers}).map(res=>res.json());
  }

  updateUser(token,user_id,params){
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+token
    });
    // console.log(headers);
    // console.log(params);
    return this._http.post(this.url+'users/'+user_id,params,{headers:headers}).map(res=>res.json());
  }

}
