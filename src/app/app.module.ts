import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {MyApp} from "./app.component";
import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import { AlmanacPage } from '../pages/almanac/almanac';
import { CoursesPage } from '../pages/courses/courses';
import { DocumentPage } from '../pages/document/document';
import { BackgroundPage } from '../pages/background/background';
import { ElibraryPage } from '../pages/elibrary/elibrary';
import { GalleryPage } from '../pages/gallery/gallery';
import { NewsPage } from '../pages/news/news';
import { NewsProvider } from '../providers/news/news';
import { ContactPage } from '../pages/contact/contact';
import { LoadingComponent } from '../components/loading/loading';
import { ViewNewsPage } from '../pages/view-news/view-news';
import { SocialSharing } from '@ionic-native/social-sharing';
import {LinksPage} from "../pages/links/links";
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    LoadingComponent,
    MyApp,
    DocumentPage,
  LinksPage,
    AlmanacPage,
    CoursesPage,
ContactPage,
    ViewNewsPage,
    BackgroundPage,
    ElibraryPage,
    GalleryPage,
    NewsPage,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__Udsm law society',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlmanacPage,
    CoursesPage,
    ViewNewsPage,
    DocumentPage,
    BackgroundPage,
    ElibraryPage,
    GalleryPage,
ContactPage,
LinksPage,
    NewsPage,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    SplashScreen,
    Keyboard,
   SocialSharing,
    DocumentViewer,
    ActivityService,
    TripService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider
  ]
})

export class AppModule {
}
