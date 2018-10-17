import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvestProvider } from './../../providers/invest/invest';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  news;
  length;
  currentPage = 0;
  loading = false;

  constructor(public navCtrl: NavController, private service: InvestProvider) {

  }
  ionViewDidEnter() {
    this.service.getNews()
      .subscribe(data => {
        this.news = Object.assign([], data['data']['list']);
        this.currentPage = data['data']['currentPage'];
      });
  }

  doInfinite(infiniteScroll) {
    this.currentPage++;
    console.log('a')
    this.service.getNews(this.currentPage)
      .subscribe(data => {
        for(let i=0;i<(data['data']['list']).length;i++) {
          this.news.push(data['data']['list'][i])
        }
        console.log(this.news);
        console.log(data['data']['currentPage']);
        infiniteScroll.complete();
      })
  }
}
