import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarPassageiroPage } from './criar-passageiro';

@NgModule({
  declarations: [
    CriarPassageiroPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarPassageiroPage),
  ],
})
export class CriarPassageiroPageModule {}
