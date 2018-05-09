import { OnInit, Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Params} from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[UsuarioServiceProvider]
})
export class SignupPage {

  public errorMessage: string;
  public usuario:Usuario;
  public confirm_pass:string;
  public confirm:boolean;

  constructor(public navCtrl: NavController,  private _usuarioService: UsuarioServiceProvider, public navParams: NavParams, public alertCtrl: AlertController) {
    this.usuario = new Usuario(null,'','','','','','','');
    this.confirm_pass ='';
    this.confirm = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  public onSubmit(){
    console.log(this.usuario+this.confirm_pass);
    if(this.usuario.password != this.confirm_pass){
      console.log("NO-coinciden");
      this.alert('Error','Las contraseñas introducidas no coinciden, vuelve a verificarlas');
      this.usuario = new Usuario(null, '','','','','','','');
      this.confirm_pass ='';
    }
    else{
      // console.log("entra al else, coincide");
      if (this.usuario.password == this.confirm_pass){
        // this.alert('Success', "coinciden contraseñas"+this.usuario.nombre);
        this._usuarioService.addUsuario(this.usuario).subscribe(
          result=>{
            if (!result.usuario) {
              this.alert('Error','Problemas con el servidor. Contacte con su administrador de red.');
              console.log(result);
            }
            else{
              if(result){
                
                this.usuario = result.usuario;
                this.alert("Success", "Usuario creado correctamente. Por favor "+this.usuario.nombre+" "+this.usuario.apaterno+" introduce tus credenciales.");
                this.navCtrl.setRoot(HomePage);
              }
              else{
                console.log("Result "+result);
              }
            }
          },
        err=>{
          let error = JSON.parse(JSON.stringify(err));
          let errorMessage = JSON.parse(error._body);
          if (errorMessage !=null) {
            // let errorEmail = JSON.parse(errorMessage.email);
            console.log("Error "+ JSON.stringify(errorMessage));
            this.alert('Error', errorMessage.errors.email);
            
          }
        });

        
      }
    }
  }

  public alert(titulo:string, contenido:string ){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

}
