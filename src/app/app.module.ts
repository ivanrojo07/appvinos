import { OrdensPage } from './../pages/ordens/ordens';
import { ProductosPage } from './../pages/productos/productos';
import { MapPage } from './../pages/map/map';
import { SocialSharing } from "@ionic-native/social-sharing";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';

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
import { DomicilioFiscalPage } from '../pages/domicilio-fiscal/domicilio-fiscal';
import { DomicilioEnvioPage } from '../pages/domicilio-envio/domicilio-envio';
import { DomfiscalFormPage } from '../pages/domfiscal-form/domfiscal-form';
import { DomenvioFormPage } from '../pages/domenvio-form/domenvio-form';
import { UvaPage } from '../pages/uva/uva';
import { BarricasPage } from '../pages/barricas/barricas';
import { BarricaPage } from '../pages/barrica/barrica';
import { UvasProvider } from '../providers/uvas/uvas';
import { ProductoresProvider } from '../providers/productores/productores';
import { ProductoresMapPage } from '../pages/productores-map/productores-map';
import { UserFormPage } from '../pages/user-form/user-form';
import { MyWineFormPage } from '../pages/my-wine-form/my-wine-form';
import { ProductorPage } from '../pages/productor/productor';
import { PuntosCorchosProvider } from '../providers/puntos-corchos/puntos-corchos';
import { PuntosPage } from '../pages/puntos/puntos';
import { BarricaProvider } from '../providers/barrica/barrica';
import { SellProvider } from '../providers/sell/sell';
import { BodegaProvider } from '../providers/bodega/bodega';
import { ProductoPage } from '../pages/producto/producto';
import { ShoppingCartProvider } from '../providers/providers';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingCartPage } from "../pages/shopping-cart/shopping-cart";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoginPage,
    UserPage,
    UserFormPage,
    AboutPage,
    NotificacionesPage,
    DisclaimerPage,
    ProductoresPage,
    ProductorPage,
    ProductoresMapPage,
    TutorialPage,
    UvasPage,
    UvaPage,
    PrivacidadPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
    DomicilioFiscalPage,
    DomfiscalFormPage,
    DomicilioEnvioPage,
    DomenvioFormPage,
    BarricasPage,
    BarricaPage,
    MyWineFormPage,
    PuntosPage,
    MapPage,
    ProductosPage,
    ProductoPage,
    TabsPage,
    ShoppingCartPage,
    OrdensPage,
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
    UserFormPage,
    AboutPage,
    NotificacionesPage,
    DisclaimerPage,
    ProductoresPage,
    ProductorPage,
    ProductoresMapPage,
    TutorialPage,
    UvasPage,
    UvaPage,
    PrivacidadPage,
    SettingPage,
    ContrasenaPage,
    TarjetaPage,
    TarjetaFormPage,
    DomicilioFiscalPage,
    DomfiscalFormPage,
    DomicilioEnvioPage,
    DomenvioFormPage,
    BarricasPage,
    BarricaPage,
    MyWineFormPage,
    PuntosPage,
    MapPage,
    ProductosPage,
    ProductoPage,
    TabsPage,
    ShoppingCartPage,
    OrdensPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider,
    TarjetaProvider,
    DomicilioFiscalProvider,
    DomicilioEnvioProvider,
    UvasProvider,
    ProductoresProvider,
    GoogleMaps,
    SocialSharing,
    PuntosCorchosProvider,
    BarricaProvider,
    SellProvider,
    BodegaProvider,
    ShoppingCartProvider,
    
  ]
})
export class AppModule {}
