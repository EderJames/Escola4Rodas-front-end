import { Component } from '@angular/core';
import { NavController, MenuController, AlertController, LoadingController, ToastController, DateTime, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { ViagemModel } from '../../models/ViagemModel';
import { PaginaBase } from '../../infraestrutura/PaginaBase';
import { ViagemServiceProvider } from '../../providers/viagem-service/viagem-service';
import { DocumentoVeiculoModel } from '../../models/DocumentoVeiculoModel';
import { VeiculoServiceProvider } from '../../providers/veiculo-service/veiculo-service';
import { VeiculoModel } from '../../models/VeiculoModel';
import { UsuarioModel } from '../../models/UsuarioModel';
import { DocumentoVeiculoServiceProvider } from '../../providers/documento-veiculo-service/documento-veiculo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PaginaBase {

  token: string;
  usuarioLogado: UsuarioModel;
  proximasViagens: Array<ViagemModel>;
  documentosVencer: Array<DocumentoVeiculoModel>;
  veiculos: Array<VeiculoModel>;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage,
    public menuCtrl: MenuController, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, toastCtrl: ToastController,
    private viagemService: ViagemServiceProvider, private veiculoService: VeiculoServiceProvider,
    private documentoService: DocumentoVeiculoServiceProvider, public navParams: NavParams) {

    super({ alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela() {
    debugger;
    this.usuarioLogado = new UsuarioModel();
    this.obterToken();
    if(this.navParams.data.usuarioLogadoEnviar != null){
      this.usuarioLogado = this.navParams.data.usuarioLogadoEnviar;
    }
    
    this.menuCtrl.enable(true);
    this.proximasViagens = new Array<ViagemModel>();
    this.documentosVencer = new Array<DocumentoVeiculoModel>();
    this.veiculos = new Array<VeiculoModel>();

    this.povoarArrayProximasViagens();
    this.povoarArrayDocumentosAVencer();
  }

  obterToken() {
    this.nativeStorage.getItem('token_autenticacao')
      .then(
        data => { this.token = data.token },
        erro => this.token = '<sem token>'
      );
  }

  povoarArrayProximasViagens() {
    //this.mostrarLoading("Buscando viagens");
    this.viagemService.listarViagens().subscribe(
      resposta => {
        //this.esconderLoading();
        debugger
        this.proximasViagens = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });

    /*
  let viagem1 = new ViagemModel();
  viagem1.codigo = 1;
  viagem1.Nome = "Cristóvão de mendoza";

  let viagem2 = new ViagemModel();
  viagem2.codigo = 2;
  viagem2.Nome = "Maria Araci";

  this.proximasViagens.push(viagem1);
  this.proximasViagens.push(viagem2);
  */
  }

  povoarArrayDocumentosAVencer() {
    this.mostrarLoading("Buscando documentos");
    this.documentoService.listarDocumentosVeiculo().subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        this.documentosVencer = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });

    /*
    let documento1 = new DocumentoVeiculoModel();
    documento1.Codigo = 1;
    documento1.Codigo_Tipo_Documento = 1;
    documento1.Nome_Documento = "Seguro obrigatório Van Andorinha";

    let documento2 = new DocumentoVeiculoModel();
    documento2.Codigo = 2;
    documento2.Codigo_Tipo_Documento = 1;
    documento2.Nome_Documento = "Seguro dos passageiros";

    let documento3 = new DocumentoVeiculoModel();
    documento3.Codigo = 3;
    documento3.Codigo_Tipo_Documento = 1;
    documento3.Nome_Documento = "IPVA";

    this.documentosVencer.push(documento1);
    this.documentosVencer.push(documento2);
    this.documentosVencer.push(documento3);
    */
  }
}
