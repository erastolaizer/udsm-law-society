import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingComponent } from '../../components/loading/loading';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
public courses ;
public llb = true;
public bale = true ;
public loading = true ;
llb1:any = false ;
llb2:any = false;
llb3:any = false;
llb4:any = false;
llbo:any = false;

bale1:any = false;
bale2:any = false;
bale3:any = false;
baleo:any = false;


  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.http.get('http://saratani.dreamgeeks.tech/api/getCourses').subscribe((courses) => {
       this.courses = courses ;
      console.log(this.courses);
      this.loading = false ;
      });
  }
   
   law() { 
     this.llb = !this.llb ;
    }

   lawB(){
  this.bale = !this.bale ; 
  }

    llbCourse(initial){
     if (initial == '1') { this.llb1 = !this.llb1}
      if (initial == '2') { this.llb2 = !this.llb2}
      if (initial == '3') { this.llb3 = !this.llb3}
     if (initial == '4') { this.llb4 = !this.llb4}
     if (initial == 'o') { this.llbo = !this.llbo}
    }

    baleCourse(initial){
     if (initial == '1') { this.bale1 = !this.bale1}
      if (initial == '2') { this.bale2 = !this.bale2}
      if (initial == '3') { this.bale3 = !this.bale3}
     if (initial == 'o') { this.baleo = !this.baleo}
    }
}
