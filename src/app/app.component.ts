import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Config, Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

    
import { UsuarioServiceProvider } from '../providers/providers';


// import { FirstRunPage } from '../pages/pages';
import { UserPage } from '../pages/user/user';
import { AboutPage } from '../pages/about/about';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { ProductoresPage } from '../pages/productores/productores';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { UvasPage } from '../pages/uvas/uvas';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { PrivacidadPage } from '../pages/privacidad/privacidad';
import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';
import { BarricasPage } from '../pages/barricas/barricas';
import { PuntosPage } from "../pages/puntos/puntos";

export interface PageInterface{
  title: string;
  component: any;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  

  @ViewChild(Nav) nav: Nav;

  loggedInPages: PageInterface[]=[

    { title: "Home", component: TabsPage },
    { title: "Puntos Corchos", component:PuntosPage},
    { title: "Ajustes", component: SettingPage},
    { title: "Acerca de nosotros", component: AboutPage },
    { title: "Notificaciones", component: NotificacionesPage },
    { title: "Terminos legales", component: DisclaimerPage},
    { title: "Productores", component: ProductoresPage},
    { title: "Tutorial", component: TutorialPage},
    { title: "Sobre las Uvas", component: UvasPage},
    { title: "Sobre las barrica", component: BarricasPage },
    { title: "Aviso de privacidad", component: PrivacidadPage},
  ];

  loggedOutPages: PageInterface[]=[
    { title: "Home", component: HomePage },
    { title: "Registrate", component: SignupPage},
    { title: "Inicia Sesión", component: LoginPage},
    { title: "¿Quiénes somos?", component: AboutPage },
    // { title: "Notificaciones", component: NotificacionesPage },
    { title: "Terminos legales", component: DisclaimerPage },
    { title: "Productores", component: ProductoresPage },
    { title: "¿Cómo Funciona?", component: TutorialPage },
    { title: "Acerca de las Uvas", component: UvasPage },
    { title: "Sobre las barrica", component: BarricasPage },
    { title: "Aviso de privacidad", component: PrivacidadPage }
  ];

  rootPage: any;
  access_token: string = "";


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private _usuarioService: UsuarioServiceProvider,
    public menu: MenuController,
    public events: Events,
  ) {
    this.initializeApp();
    this.listenToLoginEvents();
    this.storage.get("access_token").then((val)=>{
      this.access_token = val;
      if (this.access_token == null || this.access_token == "") {
        this.rootPage = HomePage;
        this.enableMenu(false);
      } else {
        this.rootPage = TabsPage;

        this._usuarioService.estaLogeado().then((hasLoggedIn)=>{
          this.enableMenu(hasLoggedIn == true);
          console.log("logeado");
        });
      }
    });

    
  }

  listenToLoginEvents(){
    this.events.subscribe('user:login', ()=>{
      console.log('eventLogin');
      this.enableMenu(true);
    });
    this.events.subscribe('user:signup', ()=>{
      this.enableMenu(true);
    });
    this.events.subscribe("user:logout", ()=>{
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean){
    console.log("loggedIn"+loggedIn);
    this.menu.enable(loggedIn, "loggedInMenu");
    this.menu.enable(!loggedIn, "loggedOutMenu");
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);


  }

  logout(){
    this._usuarioService.logout();
    this.rootPage = HomePage;
    this.nav.setRoot(HomePage);
  }
}