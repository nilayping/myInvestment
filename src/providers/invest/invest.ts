import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsDetailPage } from './../../pages/news-detail/news-detail';

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
  private investorDetailUrl = "https://rest.whale8.com/v3/bw/celebrity/detail";
  constructor(public http: HttpClient) {
  }

  /* Getting news list from the server */
  getNews(page?) {
    if (!page) {
      return this.http.get(this.newsUrl);
    }
    else {
      return this.http.get(this.newsUrl, { params: new HttpParams().set('page', page) });
    }
  }

  /* Getting news detail page from the server */
  getDetail(id) {
    var url;
    if(id>100){
      url=this.detailUrl;
    }else{url=this.investorDetailUrl}
    
    return this.http.get(url, {
      params: new HttpParams()
        .set('model', 'iphone')
        .set('os', 'ios')
        .set('version', 'abc')
        .set('id', id)
    });
  }

  /* Getting investors list from the server */
  getInvestors() {
    return this.http.get(this.investorsUrl);
  }
}
