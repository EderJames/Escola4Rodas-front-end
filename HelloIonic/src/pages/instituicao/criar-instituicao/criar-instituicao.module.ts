import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarInstituicaoPage } from './criar-instituicao';

@NgModule({
  declarations: [
    CriarInstituicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarInstituicaoPage),
  ],
})
export class CriarInstituicaoPageModule {}
