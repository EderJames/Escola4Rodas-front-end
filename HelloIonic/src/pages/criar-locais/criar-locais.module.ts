import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarLocaisPage } from './criar-locais';

@NgModule({
  declarations: [
    CriarLocaisPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarLocaisPage),
  ],
})
export class CriarLocaisPageModule {}
