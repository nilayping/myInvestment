import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvestProvider } from './../../providers/invest/invest';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NewsDetailPage } from '../news-detail/news-detail';
import { InvestorDetailPage } from '../investor-detail/investor-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news = [];  //News list.
  currentPage = 0; //The page of news list.
  loading = false;
  investors = []; //investors list.

  constructor(public navCtrl: NavController, private service: InvestProvider) {
  }

  ionViewDidEnter() {
    this.service.getNews()
      .subscribe(data => {
        this.news = data['data']['list'];
        this.currentPage = data['data']['currentPage'];
      });
    this.service.getInvestors()
      .subscribe(data => {
        this.investors = data["data"]['list'];
      });
  }

  /* Send request to get data from the server.*/
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

  /* When user select news or investor, redirect user to the detail page */
  itemTapped(id) {
    if (id > 100) {
      this.navCtrl.push(NewsDetailPage, { id: id });
    } else {
      this.navCtrl.push(InvestorDetailPage, { id: id });
    }
  }
}
