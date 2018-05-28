import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarMotoristaPage } from './criar-motorista';

@NgModule({
  declarations: [
    CriarMotoristaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarMotoristaPage),
  ],
})
export class CriarMotoristaPageModule {}
