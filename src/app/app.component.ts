import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { AlmanacPage } from '../pages/almanac/almanac';
import { CoursesPage } from '../pages/courses/courses';
import { BackgroundPage } from '../pages/background/background';
import { ElibraryPage } from '../pages/elibrary/elibrary';
import { GalleryPage } from '../pages/gallery/gallery';
import { NewsPage } from '../pages/news/news';

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
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'UDSL Background', component: BackgroundPage, icon: 'home'},
      {title: 'Almanac', component: AlmanacPage, icon: 'home'},
      {title: 'Courses', component: CoursesPage, icon: 'home'},
      {title: 'E-Library', component: ElibraryPage, icon: 'paper'},
      {title: 'Gallery', component: GalleryPage, icon: 'camera'},
      {title: 'News Hub', component: NewsPage, icon: 'home'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}
