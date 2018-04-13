import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProdutosPage } from '../produtos/produtos';
import { PerfilPage } from '../perfil/perfil';
import { ViagensPage } from '../viagens/viagens';
import { PassageirosPage } from '../passageiros/passageiros';
import { VeiculosPage } from '../veiculos/veiculos';
import { MotoristasPage } from '../motoristas/motoristas';
import { InstituicoesPage } from '../instituicoes/instituicoes';
    
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
