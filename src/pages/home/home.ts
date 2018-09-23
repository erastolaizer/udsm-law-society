import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import { AlmanacPage } from '../almanac/almanac';
import { CoursesPage } from '../courses/courses';
import { BackgroundPage } from '../background/background';
import { ElibraryPage } from '../elibrary/elibrary';
import { GalleryPage } from '../gallery/gallery';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  gotoPage(page){
    if(page == 'BackgroundPage'){
      this.nav.push(BackgroundPage);
    }
    else if(page == 'AlmanacPage'){
      this.nav.push(AlmanacPage);
    }
    else if(page == 'GalleryPage'){
      this.nav.push(GalleryPage);
    }
    else if(page == 'NewsPage'){
      this.nav.push(NewsPage);
    }
    else if(page == 'ElibraryPage'){
      this.nav.push(ElibraryPage);
    }
    else if(page == 'CoursesPage'){
      this.nav.push(CoursesPage);
    }
  }

}

//
