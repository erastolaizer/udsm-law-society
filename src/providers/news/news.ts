import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }
  getNews(){
  return this.http.get('http://saratani.dreamgeeks.tech/api/getNews');
  }
  getDocuments(){
  return this.http.get('http://saratani.dreamgeeks.tech/api/getDocuments');
  }
}
