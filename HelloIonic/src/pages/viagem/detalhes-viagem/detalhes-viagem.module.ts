import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesViagemPage } from './detalhes-viagem';

@NgModule({
  declarations: [
    DetalhesViagemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesViagemPage),
  ],
})
export class DetalhesViagemPageModule {}
