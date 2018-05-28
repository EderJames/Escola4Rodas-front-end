import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarViagemPage } from './criar-viagem';

@NgModule({
  declarations: [
    CriarViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarViagemPage),
  ],
})
export class CriarViagemPageModule {}
