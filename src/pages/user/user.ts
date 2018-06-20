import { MyWineFormPage } from './../my-wine-form/my-wine-form';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import { UsuarioServiceProvider } from '../../providers/providers';
import { Storage } from '@ionic/storage';
import { MarcaProvider } from '../../providers/marca/marca';
import { Marca } from '../../models/marca';
import { MarcaPage } from "../marca/marca";
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [UsuarioServiceProvider,MarcaProvider]
})
export class UserPage {

  public usuario: Usuario;
  public access_token: string;
  public marcas: Marca[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioServiceProvider,
    private marcaProvider: MarcaProvider,
    private storage: Storage,
  ) {
    this.marcas = [];
    this.usuario = new Usuario(null, '', '', '', '', '', '', '');
  }
  ngOnInit() {
    this.getMarcas();
    this.storage.get("access_token").then((val) => {
      // console.log("TOKEN: "+val);
      this.access_token = val;
      if (this.access_token == null || this.access_token == "") {
        // console.log(this.access_token);

      }
      else {
        // console.log(this.access_token);
        this._usuarioService.getUsuario(this.access_token).subscribe(result => {
          console.log(result.name);
          // this.usuario = new Usuario(result.id, result.name, result.appaterno, result.apmaterno, result.nacimiento, result.telefono, result.email, result.password);
          this.usuario.idusuario = result.id;
          this.usuario.nombre = result.name;
          this.usuario.apaterno = result.appaterno;
          this.usuario.amaterno = result.apmaterno;
          this.usuario.email = result.email;
          this.usuario.fechanac = result.nacimiento;
          this.usuario.telefono = result.telefono;
          this.usuario.password = result.password;
          console.log("USUARIO" + JSON.stringify(this.usuario));

        });
      }
    });

  }
  abrirForm(){
    this.navCtrl.push(MyWineFormPage,{usuario:this.usuario});
  }
  getMarcas(){
    this.marcaProvider.getMarcas().subscribe(result=>{
      this.marcas = result.marcas;
      console.log(this.marcas);
    })
  }

  openMarca(marca){
    console.log(marca);
    this.navCtrl.push(MarcaPage,{marca:marca,usuario:this.usuario});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
