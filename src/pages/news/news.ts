import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ViewNewsPage } from '../view-news/view-news';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
 public news ;
 public isLoaded = false ;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.http.get('http://saratani.dreamgeeks.tech/api/getNews').subscribe((news:any)=> {
      for (let i = 0; i < news.news.length; i++) {
          news.news[i]['shortDescription'] = news.news[i].content.substring(0,175);
      }
      this.isLoaded = true ;
      this.news = news.news;
      console.log(this.news);
    });
  }
readMore(News){
  this.navCtrl.push(ViewNewsPage,{'news':News});
}

}
