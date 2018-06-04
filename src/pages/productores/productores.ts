import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';
import { ProductoresMapPage } from '../productores-map/productores-map';

/**
 * Generated class for the ProductoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface tarjeta {
  title: string,
  info: string,

}

@IonicPage()
@Component({
  selector: 'page-productores',
  templateUrl: 'productores.html',
  
})
export class ProductoresPage {
  @ViewChild(Slides) slider: Slides;
  
  tarjetas : tarjeta[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,) {
    this.tarjetas = [{
      title: "Historia del Vino",
      info: "Según la historia de Georgia es un país natal del sarmiento de uva y es reconocido como la cuna de la viticultura. La hoja de parra datada con las antiguas épocas geológicas encontrada en el territorio georgiano, las jaras con la semilla de la época de bronce y además otros descubrimientos arqueológicos, nos confirma que Georgia era la procreadora del sarmiento de uva. La presencia de gran número de cepas natales nos confirma que Georgia es origen de la formación de los viñedos cultivados y salvajes.",
    },
    {
      title: "",
      info: "En la excavaciones geológicas realizadas en el territorio del país fueron encontradas las herramientas de vinicultura: las prensas de piedra, exprimideras de uvas, así como diferentes recipientes para vino, hechos de metal y barro- todos datados del II y III adC; nos demuestra que todavía en este entonces la vinicultura era el ramo de la actividad económica del pueblo georgiano. En el siglo IX d.c. en la antigua ciudad de Iqaltho fue formada la Academia de Educación, una de las facultades de la cual era vinicultura cuyo propósito era; seguir el desarrollo de las antiguas tradiciones vinicultoras"
    },
    {
      title: `Historia Valle de Guadalupe,Baja California (México)`,
      info: "Las más recientes investigaciones arqueológicas mencionan que hay una ocupación poblacional de 7,000 a 10,000 años detrás, dentro de la denominada cultura San Dieguito. El último grupo nativo que habitó la tierra fueron los Kumiai quienes lo denominaban Ojá Cuñurr(Piedra pintada). Fue descubierto en 1795 por el alférez español Ildefonso Bernal; en 1834, la orden dominica fundó en una de sus mesetas la misión de Nuestra Señora de Guadalupe del Norte."
    },
    {
      title: "",
      info: "Los frailes conducidos desde la ciudad de México por Fray Félix Caballero, aprovechando las características de la tierra y del clima, iniciaron el cultivo de la vid, el albaricoque, la pera y el olivo. El valle contaba entonces con aproximadamente 400 habitantes nativos. En 1840 la misión fue destruida por indígenas de la región y el valle pasó a manos del gobierno, que envuelto en la invasión de Estados Unidos, la dejó en manos de una empresa rusa colonizadora por 50 años, quienes retomaron la producción del vino."
    }
  ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoresPage');
    // this.loadMap();
    // this.showProductores();
  }
  ShowMapa(){
    this.navCtrl.push(ProductoresMapPage);
  }

  // showProductores(){
  //   this.productoresProvider.getProductores().subscribe(result => {
  //     this.productores = result.vinicolas;
  //     this.alert('Vinicola:', this.productores.length.toString());
  //     this.productores.forEach(productor => {
  //     })
  //   }, error => {
  //     this.messageError = JSON.parse(error._body)
  //     console.log("Error " + JSON.stringify(this.messageError));
  //   });
  // }
  
  

}
