import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesLocalPassageiroPage } from './detalhes-local-passageiro';

@NgModule({
  declarations: [
    DetalhesLocalPassageiroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesLocalPassageiroPage),
  ],
})
export class DetalhesLocalPassageiroPageModule {}
