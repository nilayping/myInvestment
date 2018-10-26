import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvestProvider } from '../../providers/invest/invest';

/**
 * Generated class for the InvestorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investor-detail',
  templateUrl: 'investor-detail.html',
})
export class InvestorDetailPage {
  id: any;  //Id of one news page.
  selectInvestor = null; 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: InvestProvider) { 
      this.id = navParams.get('id')
    }

  ionViewDidLoad() {
    this.service.getDetail(this.id)
    .subscribe(data=>{
      this.selectInvestor=data["data"];
      console.log(this.selectInvestor.name);

    })
  }

}
