import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//providers
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';
import { AboutPage } from '../pages/about/about';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { ProductoresPage } from '../pages/productores/productores';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { PrivacidadPage } from '../pages/privacidad/privacidad';
import { UvasPage } from '../pages/uvas/uvas';
import { SettingPage } from '../pages/setting/setting';
import { ContrasenaPage } from '../pages/contrasena/contrasena';
import { TarjetaPage } from '../pages/tarjeta/tarjeta';
import { TarjetaProvider } from '../providers/tarjeta/tarjeta';
import { DomicilioFiscalProvider } from '../providers/domicilio-fiscal/domicilio-fiscal';
import { DomicilioEnvioProvider } from '../providers/domicilio-envio/domicilio-envio';
import { TarjetaFormPage } from '../pages/tarjeta-form/tarjeta-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    UserPage,
    AboutPage,
    NotificacionesPage,
    DisclaimerPage,
    ProductoresPage,
    TutorialPage,
    UvasPage,
    PrivacidadPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    UserPage,
    AboutPage,
    NotificacionesPage,
    DisclaimerPage,
    ProductoresPage,
    TutorialPage,
    UvasPage,
    PrivacidadPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider,
    TarjetaProvider,
    DomicilioFiscalProvider,
    DomicilioEnvioProvider,
    
  ]
})
export class AppModule {}
