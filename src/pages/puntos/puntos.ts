import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { PuntosCorchosProvider } from '../../providers/providers';
import { SocialSharing } from "@ionic-native/social-sharing";

/**
 * Generated class for the PuntosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-puntos',
  templateUrl: 'puntos.html',
  providers: [PuntosCorchosProvider]
})
export class PuntosPage implements OnInit {

  public misCupones: any[];
  public cupones: any[];
  public misPuntos: number;
  public messageError: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage:Storage,
    public puntosProvider:PuntosCorchosProvider,
    public alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    public loadingCtrl: LoadingController,
  ) {
    this.misCupones = [];
    this.cupones = [];
    this.misPuntos = 0;

  }

  ngOnInit(){
    this.misCupones=[];
    this.cupones=[];
    this.messageError=null;
    this.misPuntos = 0;
    this.showCupones();
  }

  ionViewWillEnter(){
   this.ngOnInit();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosPage');
  }

  showCupones(){
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Cargando...'
    });

    loading.present();
    this.storage.get('access_token').then(res=>{
      let token = JSON.parse(res);
      this.puntosProvider.getCodigos(token).subscribe(res=>{
        console.log(res);
        this.misCupones = res.miscupones;
        this.cupones = res.cupones;
        this.misPuntos= res.mispuntos;
        loading.dismiss();
      },error=>{
        console.log(error);
        this.messageError=error;
      });
    })
  }
  newCode(){
    let loading = this.loadingCtrl.create({
      spinner:'dots',
      content: 'Creando tu código...'
    });

    loading.present();
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.puntosProvider.getCodigo(token).subscribe(res=>{
        console.log(res);
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Tu código de invitación es '+res.punto.codigo,
          subTitle: 'Invita a tus amigos a utilizar PWM® y obtengan puntos corchos para intercambiarlo por productos.',
          buttons: [
            {
              text: 'Compartir luego',
              handler:()=>{

              }
            },
            {
              text:'Compartir',
              handler:()=>{
                console.log('Compartir');
                this.shareCode(res.punto);
              }
            }
          ]
        }).present();
      },error=>{
        let error_message= JSON.parse(error._body);
        loading.dismiss();
        this.alertCtrl.create({
          title:'Error',
          subTitle: error_message['error'],
          buttons:['Aceptar']
        }).present();
        console.log(error);
      })
    })
  }
  shareCode(punto){
    let message = `Hola, registra el codigo ${punto.codigo} en PWM® y obten ${punto.puntos} puntos corchos`;
    this.socialSharing.share(message, "PWM®");
    this.ngOnInit();
  }
  ingresarCodigo(){
    this.alertCtrl.create({
      title: 'Ingrese el código:',
      inputs:[
        {
          name: 'codigo',
          id:'codigo',
          placeholder: 'código'
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data=>{
            console.log('cancelado');
          }
        },
        {
          text:'Enviar',
          handler: data=>{
            this.enviarCodigo(data.codigo)
          }
        }
      ]

    }).present();
  }
  enviarCodigo(codigo){
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'validando tu código...'
    });
    loading.present();
    this.storage.get('access_token').then(val=>{
      let token = JSON.parse(val);
      this.puntosProvider.setCodigo(token,codigo).subscribe(res=>{
        console.log(res);
        loading.dismiss();
        this.alertCtrl.create({
          title: 'Aceptado:',
          subTitle: res.message,
          buttons: ['Aceptar']
        }).present();
        this.ngOnInit();
      },error=>{
        loading.dismiss();
        let message_error = JSON.parse(error._body);
        this.alertCtrl.create({
          title: 'Error',
          subTitle: message_error['error'],
          buttons: ['Aceptar']
        }).present();
        this.ngOnInit();
        console.log(error);
      })
    });
  }

}
