import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuarioServiceProvider } from '../../providers/providers';

/**
 * Generated class for the UserFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-form',
  templateUrl: 'user-form.html',
  providers : [UsuarioServiceProvider]
})
export class UserFormPage implements OnInit {

  public usuario: Usuario;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage,
    private usuarioProvider: UsuarioServiceProvider,
  ) {
    this.usuario = new Usuario(null,'','','','','','','');
  }
  ngOnInit(){
    this.storage.get('access_token').then(val=>{
      let token = val;
      this.usuarioProvider.getUsuario(token).subscribe(res=>{
        // console.log(res);
        this.usuario.idusuario = res.id;
        this.usuario.nombre = res.name;
        this.usuario.apaterno = res.appaterno;
        this.usuario.amaterno = res.apmaterno;
        this.usuario.fechanac = res.nacimiento;
        this.usuario.telefono = res.numero_telefono;
        console.log(this.usuario);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFormPage');
  }

  onSubmit(form:NgForm){
    if (!form.valid) {
      this.alert("Formulario Incompleto",'Por favor llene los campos requeridos');
      form.setValue({
        _method: 'PUT',
        nombre: this.usuario.nombre,
        apaterno : this.usuario.apaterno,
        amaterno: this.usuario.amaterno,
        fechanac: this.usuario.fechanac,
        telefono: this.usuario.telefono
      });
    } else {
      var params = form.value;
      this.storage.get('access_token').then(val=>{
        let token = JSON.parse(val);
        this.usuarioProvider.updateUser(token,this.usuario.idusuario,params).subscribe(res =>{
          if(!res){
            this.alert("Error", "Problemas con el servidor");
          }
          else{
            if(res.failed){
              this.alert("Error res", res.failed);
            }
            else{
              console.log(res.message);
              this.alert("Creada", res.message);
              
              this.navCtrl.pop();
            }
          }
        },error=>{
          let err = JSON.parse(error._body);
          this.alert("Error en la petición",'Por favor intentenlo más tarde');
          form.setValue({
            _method: 'PUT',
            nombre: this.usuario.nombre,
            apaterno : this.usuario.apaterno,
            amaterno: this.usuario.amaterno,
            fechanac: this.usuario.fechanac,
            telefono: this.usuario.telefono
          });
          console.log("Error: " + JSON.stringify(err));
          console.log("ErrorMessage: " + JSON.stringify(err.error));
        });
      });
      
    }
  }
  regresar(){
    this.navCtrl.pop();
  }

  alert(titulo:string, contenido:string){
    let alert = this.alertCtrl.create({
      title:titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();
  }

}
