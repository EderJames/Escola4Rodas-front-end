import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituicoesPage } from './instituicoes';

@NgModule({
  declarations: [
    InstituicoesPage,
  ],
  imports: [
    IonicPageModule.forChild(InstituicoesPage),
  ],
})
export class InstituicoesPageModule {}
