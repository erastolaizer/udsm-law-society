import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
import { LoadingComponent } from '../../components/loading/loading';
import { NewsProvider } from '../../providers/news/news';
import { HttpClient } from '@angular/common/http';
import { DocumentPage } from '../document/document';
/**
 * Generated class for the ElibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-elibrary',
  templateUrl: 'elibrary.html',
})
export class ElibraryPage {
public documents:any ;
public  isLoaded:boolean = false ;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams,private document: DocumentViewer) {
  }

  ionViewDidLoad() {
this.http.get('http://saratani.dreamgeeks.tech/api/getDocuments').subscribe((documents:any)=> {
  this.isLoaded = true ;
  this.documents = documents.documents ;
  console.log(this.documents);
});
  }

viewDoc(doc){
  this.navCtrl.push(DocumentPage, {'document':doc});
}
}
