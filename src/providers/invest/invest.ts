import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InvestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvestProvider {
  private newsUrl = "https://rest.whale8.com/v3/news/list";
  constructor(public http: HttpClient) {
    console.log('Hello InvestProvider Provider');
  }

  getNews() { 
    return this.http.get(this.newsUrl);
  }
}
