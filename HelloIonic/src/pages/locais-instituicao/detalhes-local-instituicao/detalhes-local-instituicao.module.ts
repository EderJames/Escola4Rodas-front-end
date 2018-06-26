import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesLocalInstituicaoPage } from './detalhes-local-instituicao';

@NgModule({
  declarations: [
    DetalhesLocalInstituicaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesLocalInstituicaoPage),
  ],
})
export class DetalhesLocalInstituicaoPageModule {}
