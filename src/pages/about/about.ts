import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  slides = [
    {
      title: "",
      description: "<strong>PWM®️</strong> (<strong>Premium Wine Makers®️</strong>), es un proyecto para ofertar cómodamente desde un celular, Tablet o computadora vino mexicano por mandato de producción, a precios prefereciales con tendencia a gusto personal de nuestros clientes con la mas alta calidad en producción de vino.",
      image: "assets/img/titulo.png",
      footerimage:"assets/img/pwmSolidos.jpg"
    },
    {
      title: "",
      description: "Nuestra intervención se basa en:  la selección de uva, terrua, procesos, equipos de vinificación,  embarricado, embotellado y productores profesionales asesores o titulares.<br><br>",
      image: "",
      footerimage:"assets/img/botellas.jpeg"
    },
    {
      title: "",
      description: "La plataforma de venta PWM efectura reporte detallado de cada paso de la  producción , referencias de la uva, reconocimiento de los enólogos, wine makers y bodegas.<br><br>La entrega de nuestros vinos es de categoría Premium y personalizada.<br><br>",
      image: "",
      footerimage:"assets/img/barricas.jpeg"
    },
    {
      title: "",
      description: `Compartimos y entregamos a todos nuestros amigos, familia y clientes la pasión de producir vino mexicano creando  <strong>la  mejor experiencia de tomar vino en cada botella</strong>.<br><br><strong>“once in a time life wine experiencie”</strong><br><br>`,
      image: "",
      footerimage:"assets/img/sobremesa.jpeg"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
