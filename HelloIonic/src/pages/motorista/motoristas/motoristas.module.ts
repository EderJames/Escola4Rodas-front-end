import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotoristasPage } from './motoristas';

@NgModule({
  declarations: [
    MotoristasPage,
  ],
  imports: [
    IonicPageModule.forChild(MotoristasPage),
  ],
})
export class MotoristasPageModule {}
