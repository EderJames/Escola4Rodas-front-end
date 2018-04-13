import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { AutenticacaoService } from '../providers/autenticacao-service';
import { IAutenticacaoService } from '../providers.interfaces/IAutenticacaoService';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

import{ TabsPage } from '../pages/tabs/tabs';
import{ ProdutosPage } from '../pages/produtos/produtos';
import { PerfilPage } from '../pages/perfil/perfil';
import { ProdutoServiceProvider } from '../providers/produto-service/produto-service';
import { DetalhesProdutoPage } from '../pages/detalhes-produto/detalhes-produto';
import { MenuMotoristaPage } from '../pages/menu-motorista/menu-motorista';
import { MotoristasPage } from '../pages/motoristas/motoristas';
import { PassageirosPage } from '../pages/passageiros/passageiros';
import { VeiculosPage } from '../pages/veiculos/veiculos';
import { ViagensPage } from '../pages/viagens/viagens';
import { InstituicoesPage } from '../pages/instituicoes/instituicoes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ProdutosPage,
    PerfilPage,
    DetalhesProdutoPage,
    MenuMotoristaPage,
    ViagensPage,
    PassageirosPage,
    VeiculosPage,
    MotoristasPage,
    InstituicoesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ProdutosPage,
    PerfilPage,
    DetalhesProdutoPage,
    MenuMotoristaPage,
    ViagensPage,
    PassageirosPage,
    VeiculosPage,
    MotoristasPage,
    InstituicoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'IAutenticacaoService', useClass: AutenticacaoService},
    NativeStorage,
    ProdutoServiceProvider
  ]
})
export class AppModule {}
