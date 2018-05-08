import { OnInit, Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Params} from '@angular/router';
import { Usuario } from '../../models/usuario';
import { SignupPage } from '../signup/signup';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { UserPage } from '../user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsuarioServiceProvider ],
})
export class LoginPage implements OnInit{

  public errorMessage: string;
  public usuario: Usuario;
  public pushPage: any;
  HAS_LOGGED_IN = 'hasLoggedIn';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _usuarioService: UsuarioServiceProvider,
    public alertCtrl: AlertController,
    private storage: Storage
  ) {
      this.pushPage = "HomePage";
      this.usuario = new Usuario(null,'','','','','','','');
  }
  
  ngOnInit(){
    this.usuario = new Usuario(null,'','','','','','','');
  }
  public onSubmit(){
    // console.log(this.usuario);
    console.log(this.usuario);
    this._usuarioService.login(this.usuario).subscribe(result=>{
      if(!result){
        this.alert('Error', 'Problemas con el servidor. Contacte con su administrador de red.');
      }
      else {
        if(result.failed){
          this.alert('Error', result.failed);
          this.ngOnInit();
        }
        else{
          this.alert('Bienvenido', 'Sessión exitosa');
          this._usuarioService.logginData(result.access_token, result.refresh_token);
          this.navCtrl.setRoot(UserPage);
          this.storage.get("access_token").then((val) => {
            console.log('Your access_token is ' + val);
          });
          
        }
      }
    },
      error => {
        this.errorMessage = error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          this.alert('Error', 'Problemas con el servidor');
        }

      });
  }

  public alert(titulo:string, contenido:string ){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: contenido,
      buttons: ['OK']
    });
    alert.present();


  }

  goToRegistroPage(){
    this.navCtrl.push('SignupPage');
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
