import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-news',
  templateUrl: 'view-news.html',
})
export class ViewNewsPage {
public news :any ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = this.navParams.get('news');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNewsPage');
  }

}
