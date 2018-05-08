import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the UvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Slide{
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-uvas',
  templateUrl: 'uvas.html',
})
export class UvasPage  {
  @ViewChild(Slides) slider: Slides;
  slides: Slide[];
  
  app:any;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        title: "Tipo 1 ",
        description: "In volutpat luctus urna, sit amet scelerisque mauris tincidunt eu. Phasellus est arcu, posuere in lectus ut, tristique viverra justo. Morbi cursus quis purus ac ullamcorper. Nam vitae consectetur felis. Sed bibendum risus eget leo fringilla, eget sagittis mi congue. Donec bibendum mi eu augue accumsan, mattis vulputate magna luctus. Praesent vel interdum sem. Phasellus diam nunc, vehicula vel est quis, feugiat facilisis mauris. Morbi ut mauris nec diam maximus sagittis. Praesent dapibus posuere vehicula. Curabitur posuere elit eu arcu maximus, vitae gravida justo auctor. In hac habitasse platea dictumst. Nullam ultricies arcu ligula, ut laoreet mauris dignissim ut.",
        image: "assets/img/tipo1.png",
      },
      {
        title: "Tipo 2",
        description: "In id tempus nisi, eget dignissim urna. Nunc efficitur, sem non bibendum faucibus, nisl lectus facilisis odio, a cursus purus elit eget lacus. Aliquam enim turpis, feugiat vitae euismod sit amet, ullamcorper eu ipsum. Sed nec arcu gravida, accumsan urna a, eleifend diam. Aenean lobortis bibendum justo, ut vehicula metus. Duis dictum auctor arcu, eu elementum sapien viverra hendrerit. Cras fringilla lectus eros, id porttitor diam sollicitudin ut. Cras vel lectus dolor.",
        image: "assets/img/tipo2.png",
      },
      {
        title: "Tipo 3",
        description: "Praesent quis sapien et eros tincidunt finibus. Sed vitae quam hendrerit, dignissim augue eget, gravida neque. Suspendisse magna lacus, tincidunt sit amet aliquam at, luctus id odio. Pellentesque non tempor odio. Nulla dictum mauris nec sapien rhoncus, vel ornare ipsum fringilla. Proin efficitur libero at varius aliquam. Praesent commodo felis sed sagittis varius. Donec bibendum, mi eu tristique cursus, metus justo tempus ante, sed malesuada elit ante id justo. Donec sed blandit orci.",
        image: "assets/img/tipo3.png",
      },
      {
        title: "Tipo 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada leo magna, sit amet tempus lectus mollis sed. Nunc id diam nunc. Morbi consectetur eros vitae fringilla venenatis. Nullam tincidunt, urna at lacinia lobortis, elit magna commodo magna, non fermentum ante diam et nisi. Duis volutpat in odio sed fermentum. Ut tellus elit, pellentesque eu libero vitae, suscipit interdum ipsum. Donec in leo sed ligula porta efficitur ut vulputate erat. Cras cursus quam ac efficitur fringilla. Donec tincidunt ultrices tortor, vitae commodo leo posuere in.",
        image: "assets/img/tipo4.png",
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UvasPage');
  }
  carrousel(index){
    this.slider.slideTo(index);
  }

}
