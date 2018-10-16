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
  constructor(public navCtrl: NavController, private service: InvestProvider) {

  }

  getNews() {
    this.service.getNews()
      .subscribe(data => {
        this.news = Object.assign([], data['data']['list']);
        this.length = data['data']['pageSize'];
        console.log(this.news);
        for( let i=0; i<this.length; i++) {
          console.log(this.news[i].title);
        }
      });
  }
}
