import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarVeiculoPage } from './criar-veiculo';

@NgModule({
  declarations: [
    CriarVeiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarVeiculoPage),
  ],
})
export class CriarVeiculoPageModule {}
