import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { AlmanacPage } from '../pages/almanac/almanac';
import { CoursesPage } from '../pages/courses/courses';
import { BackgroundPage } from '../pages/background/background';
import { ElibraryPage } from '../pages/elibrary/elibrary';
import { GalleryPage } from '../pages/gallery/gallery';
import { NewsPage } from '../pages/news/news';
import { ContactPage } from '../pages/contact/contact';
import { LinksPage } from '../pages/links/links';
export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public socialSharing :SocialSharing ,
    private iab: InAppBrowser,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'assets/icon/icons8-sweet-home.png'},
      {title: 'UDSL Background', component: BackgroundPage, icon: 'assets/icon/icons8-browser-history.png'},
      {title: 'Almanac', component: AlmanacPage, icon: 'assets/icon/icons8-timetable.png'},
      {title: 'Courses', component: CoursesPage, icon: 'assets/icon/icons8-course.png'},
      {title: 'E-Library', component: ElibraryPage, icon: 'assets/icon/icons8-library-building.png'},
      {title: 'Gallery', component: GalleryPage, icon: 'assets/icon/icons8-gallery.png'},
      {title: 'News Hub', component: NewsPage, icon: 'assets/icon/icons8-news.png'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
        this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
console.log(page.title);
     if(page.title == 'Almanac') {
     this.windowBrowser('https://www.udsm.ac.tz/basic/almanac-and-prospectus');
     }
  else {
    this.nav.setRoot(page.component);
}
  }
contact() {
    this.nav.setRoot(ContactPage);
   }
links() {
    this.nav.setRoot(LinksPage);
   }
windowBrowser(link){
 this.iab.create(link,'_system');
  
}

  logout() {
    this.nav.setRoot(LoginPage);
  }

//social sharing
 instagramShare() {
    this.socialSharing.shareViaInstagram("https://play.google.com/store/apps/details?id=com.UdsmLawSociety&hl=en", null).then(() => {
      console.log("shareViaInstagram: Success");
    }).catch(() => {
      console.error("shareViaInstagram: failed");
    });
  }
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("https://play.google.com/store/apps/details?id=com.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }
 twitterShare() {
    this.socialSharing.shareViaTwitter("https://play.google.com/store/apps/details?id=com.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaTwitter: Success");
    }).catch(() => {
      console.error("shareViaTwitter: failed");
    });
  }
  facebookShare() {
    this.socialSharing.shareViaFacebook("https://play.google.com/store/apps/details?id=com.UdsmLawSociety&hl=en", null, null).then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

}
