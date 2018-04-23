import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ViagensPage } from '../viagem/viagens/viagens';
import { PassageirosPage } from '../passageiro/passageiros/passageiros';
import { VeiculosPage } from '../veiculo/veiculos/veiculos';
import { InstituicoesPage } from '../instituicao/instituicoes/instituicoes';
import { MotoristasPage } from '../motorista/motoristas/motoristas';

    
@IonicPage()
@Component({
  selector: 'page-menu-motorista',
  templateUrl: 'menu-motorista.html',
})
export class MenuMotoristaPage {

  homeTab : any = HomePage;
  viagensTab : any = ViagensPage;
  passageirosTab : any = PassageirosPage;
  veiculosTab : any = VeiculosPage;
  motoristasTab : any = MotoristasPage;
  instituicoesTab : any = InstituicoesPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuMotoristaPage');
  }

}
