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
import { LinksPage } from '../links/links';
import { ContactPage } from '../contact/contact';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

  constructor(private iab: InAppBrowser,public socialSharing :SocialSharing , private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
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
    else if(page == 'ContactPage'){
      this.nav.push(ContactPage);
    }
    else if(page == 'LinksPage'){
      this.nav.push(LinksPage);
    }
  }

windowBrowser(link){
 this.iab.create(link,'_system');
  
}

//social sharing
 instagramShare() {
    this.socialSharing.shareViaInstagram("https://play.google.com/store/apps/details?id=com.erastolaizer.UdsmLawSociety&hl=en", null).then(() => {
      console.log("shareViaInstagram: Success");
    }).catch(() => {
      console.error("shareViaInstagram: failed");
    });
  }
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("https://play.google.com/store/apps/details?id=com.erastolaizer.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }
 twitterShare() {
    this.socialSharing.shareViaTwitter("https://play.google.com/store/apps/details?id=com.erastolaizer.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: failed");
    });
  }
  facebookShare() {
    this.socialSharing.shareViaFacebook("https://play.google.com/store/apps/details?id=com.erastolaizer.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

}

//
