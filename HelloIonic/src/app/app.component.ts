import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ViagensPage } from '../pages/viagem/viagens/viagens';
import { PassageirosPage } from '../pages/passageiro/passageiros/passageiros';
import { VeiculosPage } from '../pages/veiculo/veiculos/veiculos';
import { InstituicoesPage } from '../pages/instituicao/instituicoes/instituicoes';
import { MotoristasPage } from '../pages/motorista/motoristas/motoristas';
import { CriarPassageiroPage } from '../pages/passageiro/criar-passageiro/criar-passageiro';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  rootPage:any = LoginPage;
  homeTab : any = HomePage;
  viagensTab : any = ViagensPage;
  passageirosTab : any = PassageirosPage;
  criarPassageiroTab: any = CriarPassageiroPage;
  veiculosTab : any = VeiculosPage;
  motoristasTab : any = MotoristasPage;
  instituicoesTab : any = InstituicoesPage;
  loginTab : any = LoginPage;

  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  abrirPagina(pagina) :void{
    this.nav.setRoot(pagina);
  }
}

