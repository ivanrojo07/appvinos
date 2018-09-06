import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuario } from "../../models/usuario";
import { UsuarioServiceProvider } from "../../providers/providers";
import { Storage } from "@ionic/storage";
import { ProductoPage } from "../producto/producto";

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-productos",
  templateUrl: "productos.html",
  providers: [UsuarioServiceProvider]
})
export class ProductosPage implements OnInit {
  public barricas: any[];
  public usuario: Usuario;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _usuarioService: UsuarioServiceProvider,
    private storage: Storage
  ) {
    this.barricas = navParams.get("barricas");
    console.log(this.barricas);
    this.usuario = new Usuario(null, "", "", "", "", "", "", "");
  }

  ngOnInit(){
    this.storage.get("access_token").then((val) => {
      // console.log("TOKEN: "+val);
      let access_token = val;
      if (access_token == null || access_token == "") {
        // console.log(access_token);

      }
      else {
        // console.log(access_token);
        this._usuarioService.getUsuario(access_token).subscribe(result => {
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

  openBarrica(barrica) {
    this.navCtrl.push(ProductoPage, { barrica: barrica, usuario: this.usuario });
  }
}
