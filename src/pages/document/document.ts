import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingComponent } from '../../components/loading/loading';
/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
  public pdfSrc = '' ;
  public docName:any ;
  public zoom_to = 1 ;
  public  isLoaded:boolean = false ;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      let document  = this.navParams.get('document');
      this.pdfSrc = document.pdfSrc ;
      this.docName = document.name;
    }

   zoom_in() {
      this.zoom_to = this.zoom_to + 0.25;
    }

    zoom_out() {
      if (this.zoom_to > 0.49) {
         this.zoom_to = this.zoom_to - 0.25;
      }
    }
    completeLoaded(event){
      this.isLoaded = true ;
      console.log('completed');
    }
}
