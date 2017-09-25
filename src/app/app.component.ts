import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Config, Nav, Platform } from 'ionic-angular';


import { FirstRunPage } from '../pages/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title:'Login', component: 'LoginPage' },
    { title:'Signup', component: 'SignupPage'},
    { title:'¿Quiénes somos?', component: 'AboutPage'},
    { title:'¿Cómo funciona?', component:'TutorialPage'},
    { title:'Acerca de las uvas', component:'UvasPage'},
    { title:'Disclaimer', component:'DisclaimerPage'},
    { title:'Aviso de Privacidad', component:'PrivacidadPage'},
    { title:'Productores', component:'ProductoresPage'},
    { title:'Notificaciones', component:'NotificacionesPage'}
  ]

  constructor(private platform: Platform,private statusBar: StatusBar,private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

