import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';

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
public pdfSrc = '../assets/library/udsl.pdf' ;
public zoom_to = 1 ;
  constructor(public navCtrl: NavController, public navParams: NavParams,private document: DocumentViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElibraryPage');
  }
  zoom_in() {
    this.zoom_to = this.zoom_to + 0.25;
  }

  zoom_out() {
    if (this.zoom_to > 1) {
       this.zoom_to = this.zoom_to - 0.25;
    }
  }
}
