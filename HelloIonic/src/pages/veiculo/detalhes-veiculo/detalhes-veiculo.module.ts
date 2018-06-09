import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesVeiculoPage } from './detalhes-veiculo';

@NgModule({
  declarations: [
    DetalhesVeiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesVeiculoPage),
  ],
})
export class DetalhesVeiculoPageModule {}
