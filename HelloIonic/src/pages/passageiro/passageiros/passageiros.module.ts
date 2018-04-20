import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassageirosPage } from './passageiros';

@NgModule({
  declarations: [
    PassageirosPage,
  ],
  imports: [
    IonicPageModule.forChild(PassageirosPage),
  ],
})
export class PassageirosPageModule {}
