import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvestProvider } from '../../providers/invest/invest';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})

export class NewsDetailPage {
  id: any;  //Id of one news page.
  selectPage = null; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: InvestProvider) {
    this.id = navParams.get('id')
  }

  /* When app is open sent request to get data from the server */
  ionViewDidLoad() {
    this.service.getDetail(this.id)
      .subscribe(data => {
        this.selectPage = data['data'];
      })
  }
}
