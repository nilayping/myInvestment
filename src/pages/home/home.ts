import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvestProvider } from './../../providers/invest/invest';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NewsDetailPage } from '../news-detail/news-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news;
  length;
  currentPage = 0;
  loading = false;
  investors;
  holdings;
  constructor(public navCtrl: NavController, private service: InvestProvider) {

  }
  ionViewDidEnter() {
    this.service.getNews()
      .subscribe(data => {
        this.news = data['data']['list'];
        this.currentPage = data['data']['currentPage'];
      });
    this.service.getInvesters()
      .subscribe(data => {
        this.investors = data["data"]['list'];
       console.log(this.investors[1].primaryHoldings[1])
      });
  }

  doInfinite(infiniteScroll) {
    this.currentPage++;
    this.service.getNews(this.currentPage)
      .subscribe(data => {
        for (let i = 0; i < (data['data']['list']).length; i++) {
          this.news.push(data['data']['list'][i])
        }
        infiniteScroll.complete();
      })
  }
  itemTapped(id) {
    this.navCtrl.push(NewsDetailPage, { id: id });
  }
}
