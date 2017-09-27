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
      description: "In volutpat luctus urna, sit amet scelerisque mauris tincidunt eu. Phasellus est arcu, posuere in lectus ut, tristique viverra justo. Morbi cursus quis purus ac ullamcorper. Nam vitae consectetur felis. Sed bibendum risus eget leo fringilla, eget sagittis mi congue. Donec bibendum mi eu augue accumsan, mattis vulputate magna luctus. Praesent vel interdum sem. Phasellus diam nunc, vehicula vel est quis, feugiat facilisis mauris. Morbi ut mauris nec diam maximus sagittis. Praesent dapibus posuere vehicula.",
      image: "assets/img/titulo.png",
    },
    {
      title: "",
      description: "In id tempus nisi, eget dignissim urna. Nunc efficitur, sem non bibendum faucibus, nisl lectus facilisis odio, a cursus purus elit eget lacus. Aliquam enim turpis, feugiat vitae euismod sit amet, ullamcorper eu ipsum. Sed nec arcu gravida, accumsan urna a, eleifend diam. Aenean lobortis bibendum justo, ut vehicula metus. Duis dictum auctor arcu, eu elementum sapien viverra hendrerit. Cras fringilla lectus eros, id porttitor diam sollicitudin ut. Cras vel lectus dolor.",
      image: "",
    },
    {
      title: "",
      description: "Praesent quis sapien et eros tincidunt finibus. Sed vitae quam hendrerit, dignissim augue eget, gravida neque. Suspendisse magna lacus, tincidunt sit amet aliquam at, luctus id odio. Pellentesque non tempor odio. Nulla dictum mauris nec sapien rhoncus, vel ornare ipsum fringilla. Proin efficitur libero at varius aliquam. Praesent commodo felis sed sagittis varius. Donec bibendum, mi eu tristique cursus, metus justo tempus ante, sed malesuada elit ante id justo. Donec sed blandit orci. In nunc orci, fringilla eu pharetra sed, sagittis tristique nisi. Ut scelerisque elementum est, eu dictum massa sollicitudin sit amet. Pellentesque consequat pulvinar imperdiet. Curabitur ornare erat eget risus vehicula tempus.",
      image: "",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
