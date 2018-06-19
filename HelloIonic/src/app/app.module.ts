import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ViewChild } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Nav, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { AutenticacaoService } from '../providers/autenticacao-service';
import { IAutenticacaoService } from '../providers.interfaces/IAutenticacaoService';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../pages/produto/tabs/tabs';
import { ProdutosPage } from '../pages/produto/produtos/produtos';
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
import { CriarViagemPage } from '../pages/viagem/criar-viagem/criar-viagem';
import { CriarInstituicaoPage } from '../pages/instituicao/criar-instituicao/criar-instituicao';
import { CriarMotoristaPage } from '../pages/motorista/criar-motorista/criar-motorista';
import { CriarVeiculoPage } from '../pages/veiculo/criar-veiculo/criar-veiculo';
import { DetalhesVeiculoPage } from '../pages/veiculo/detalhes-veiculo/detalhes-veiculo';
import { DetalhesDocumentoVeiculoPage } from '../pages/documentos/detalhes-documento-veiculo/detalhes-documento-veiculo';
import { CriarDocumentoVeiculoPage } from '../pages/documentos/criar-documento-veiculo/criar-documento-veiculo';
import { DocumentosVeiculoPage } from '../pages/documentos/documentos-veiculo/documentos-veiculo';
import { DocumentoVeiculoServiceProvider } from '../providers/documento-veiculo-service/documento-veiculo-service';
import { DetalhesMotoristaPage } from '../pages/motorista/detalhes-motorista/detalhes-motorista';
import { DetalhesViagemPage } from '../pages/viagem/detalhes-viagem/detalhes-viagem';
import { DiaSemanaServiceProvider } from '../providers/dia-semana-service/dia-semana-service';



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
    InstituicoesPage,
    DetalhesInstituicaoPage,
    CriarPassageiroPage,
    CriarLocaisPage,
    CriarViagemPage,
    CriarInstituicaoPage,
    MotoristasPage,
    CriarMotoristaPage,
    DetalhesMotoristaPage,
    CriarVeiculoPage,
    DetalhesVeiculoPage,
    DocumentosVeiculoPage,
    DetalhesDocumentoVeiculoPage,
    CriarDocumentoVeiculoPage,
    DetalhesViagemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
       monthNames: ['Janeiro', 
                    'Fevereiro', 
                    'Março',
                    'Abril',
                    'Maio', 
                    'Junho', 
                    'Julho', 
                    'Agosto', 
                    'Setembro', 
                    'Outubro', 
                    'Novembro', 
                    'Dezembro' 
                  ],
      monthShortNames: ['jan', 
                        'fev', 
                        'mar',
                        'abr',
                        'mai',
                        'jun',
                        'jul',
                        'ago',
                        'set',
                        'out',
                        'nov',
                        'dez'
                      ],
      dayNames: ['domingo', 
                 'segunda-feira',
                 'terça-feira',
                 'quarta-feira',
                 'quinta-feira',
                 'sexta-feira',
                 'sábado' 
                ],
      dayShortNames: ['dom', 
                      'seg', 
                      'ter',
                      'qua',
                      'qui',
                      'sex',
                      'sab' 
                    ] 
    }),
    
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
    InstituicoesPage,
    CriarPassageiroPage,
    CriarLocaisPage,
    CriarViagemPage,
    CriarInstituicaoPage,
    MotoristasPage,
    CriarMotoristaPage,
    DetalhesMotoristaPage,
    CriarVeiculoPage,
    DetalhesVeiculoPage,
    DocumentosVeiculoPage,
    DetalhesDocumentoVeiculoPage,
    CriarDocumentoVeiculoPage,
    DetalhesViagemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'IAutenticacaoService', useClass: AutenticacaoService },
    NativeStorage,
    ProdutoServiceProvider,
    InstituicaoServiceProvider,
    MotoristaServiceProvider,
    PassageiroServiceProvider,
    VeiculoServiceProvider,
    ViagemServiceProvider,
    DocumentoVeiculoServiceProvider,
    DocumentoVeiculoServiceProvider,
    DiaSemanaServiceProvider
  ]
})
export class AppModule { }
