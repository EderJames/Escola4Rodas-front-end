import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesInstituicaoPage } from './detalhes-instituicao';

@NgModule({
  declarations: [
    DetalhesInstituicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesInstituicaoPage),
  ],
})
export class DetalhesInstituicaoPageModule {}
