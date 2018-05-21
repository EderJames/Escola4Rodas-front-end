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

import{ TabsPage } from '../pages/produto/tabs/tabs';
import{ ProdutosPage } from '../pages/produto/produtos/produtos';
import { PerfilPage } from '../pages/perfil/perfil';
import { ProdutoServiceProvider } from '../providers/produto-service/produto-service';
import { DetalhesProdutoPage } from '../pages/produto/detalhes-produto/detalhes-produto';
import { MenuMotoristaPage } from '../pages/menu-motorista/menu-motorista';
import { MotoristasPage } from '../pages/motorista/motoristas/motoristas';
import { PassageirosPage } from '../pages/passageiro/passageiros/passageiros';
import { CriarPassageiroPage } from '../pages/passageiro/criar-passageiro/criar-passageiro';
import { VeiculosPage } from '../pages/veiculo/veiculos/veiculos';
import { ViagensPage } from '../pages/viagem/viagens/viagens';
import { InstituicoesPage } from '../pages/instituicao/instituicoes/instituicoes';
import { InstituicaoServiceProvider } from '../providers/instituicao-service/instituicao-service';
import { MotoristaServiceProvider } from '../providers/motorista-service/motorista-service';
import { PassageiroServiceProvider } from '../providers/passageiro-service/passageiro-service';
import { VeiculoServiceProvider } from '../providers/veiculo-service/veiculo-service';
import { ViagemServiceProvider } from '../providers/viagem-service/viagem-service';
import { DetalhesInstituicaoPage } from '../pages/instituicao/detalhes-instituicao/detalhes-instituicao';
import { CriarLocaisPage } from '../pages/criar-locais/criar-locais';

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
    InstituicoesPage,
    DetalhesInstituicaoPage,
    CriarPassageiroPage,
    CriarLocaisPage
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
    InstituicoesPage,
    CriarPassageiroPage,
    CriarLocaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'IAutenticacaoService', useClass: AutenticacaoService},
    NativeStorage,
    ProdutoServiceProvider,
    InstituicaoServiceProvider,
    MotoristaServiceProvider,
    PassageiroServiceProvider,
    VeiculoServiceProvider,
    ViagemServiceProvider
  ]
})
export class AppModule {}
