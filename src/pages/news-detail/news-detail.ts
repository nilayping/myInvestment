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
  id;
  selectPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: InvestProvider) {
    this.id = navParams.get('id')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailPage');
    console.log(this.id);
    this.service.getNewsDetail(this.id)
      .subscribe(data => {
        this.selectPage = data['data'];
        console.log(this.selectPage);
      })
  }


}
