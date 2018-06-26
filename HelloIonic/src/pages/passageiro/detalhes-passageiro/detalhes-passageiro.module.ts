import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesPassageiroPage } from './detalhes-passageiro';

@NgModule({
  declarations: [
    DetalhesPassageiroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesPassageiroPage),
  ],
})
export class DetalhesPassageiroPageModule {}
