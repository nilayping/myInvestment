import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestorDetailPage } from './investor-detail';

@NgModule({
  declarations: [
    InvestorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestorDetailPage),
  ],
})
export class InvestorDetailPageModule {}
