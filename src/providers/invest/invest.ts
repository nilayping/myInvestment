import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InvestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvestProvider {
  private newsUrl = "https://rest.whale8.com/v3/news/list";
  private detailUrl = "https://rest.whale8.com/v3/news/detail";
  private investorsUrl = "https://rest.whale8.com/v3/bw/celebrity/list";

  constructor(public http: HttpClient) {
    console.log('Hello InvestProvider Provider');
  }

  getNews(page?) {
    if (!page) {
      return this.http.get(this.newsUrl);
    }
    else {
      return this.http.get(this.newsUrl, { params: new HttpParams().set('page', page) });
    }
  }
  getNewsDetail(id) {
    return this.http.get(this.detailUrl, {
      params: new HttpParams()
        .set('model', 'iphone')
        .set('os', 'ios')
        .set('version', 'abc')
        .set('id', id)
    });
  }
  getInvesters() {
    return this.http.get(this.investorsUrl);
  }
}
