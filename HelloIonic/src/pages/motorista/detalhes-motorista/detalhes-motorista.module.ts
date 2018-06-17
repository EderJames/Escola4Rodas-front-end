import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesMotoristaPage } from './detalhes-motorista';

@NgModule({
  declarations: [
    DetalhesMotoristaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesMotoristaPage),
  ],
})
export class DetalhesMotoristaPageModule {}
