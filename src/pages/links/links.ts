import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the LinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@Component({
  selector: 'page-links',
  templateUrl: 'links.html',
})

export class LinksPage {

 
 constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
  }

 
 ionViewDidLoad() {
    console.log('ionViewDidLoad LinksPage');
  }



windowBrowser(link){
 this.iab.create(link,'_system');
  
}
}
