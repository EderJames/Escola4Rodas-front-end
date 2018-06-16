import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { TipoDocumento } from '../../../models/TipoDocumento';
import { DocumentoVeiculoModel } from '../../../models/DocumentoVeiculoModel';
import { DocumentoVeiculoServiceProvider } from '../../../providers/documento-veiculo-service/documento-veiculo-service';

@IonicPage()
@Component({
  selector: 'page-detalhes-documento-veiculo',
  templateUrl: 'detalhes-documento-veiculo.html',
})
export class DetalhesDocumentoVeiculoPage extends PaginaBase {

  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  detalharDocumentoVeiculo: boolean;

  veiculoModel: VeiculoModel;
  tiposDocumentos: Array<TipoDocumento>;
  documentoVeiculoModel: DocumentoVeiculoModel;
  tipoDocumentoAtual: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController,
    public loadingCtrl: LoadingController, toastCtrl: ToastController, public documentoVeiculoService: DocumentoVeiculoServiceProvider) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    debugger
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela() {
    debugger
    this.desabilitarEdicao();
    this.tiposDocumentos = new
      Array<TipoDocumento>(
        { Codigo: 1, Nome: "Seguro Van" },
        { Codigo: 2, Nome: "Seguro Passageiros" },
        { Codigo: 3, Nome: "Seguro Van Obrigatório" },
        { Codigo: 4, Nome: "IPVA" },
        { Codigo: 5, Nome: "Documento Liçença Prefeitura" }
      );
    this.documentoVeiculoModel = this.navParams.data.documentoVeiculo;
    this.tipoDocumentoAtual = this.documentoVeiculoModel.Nome_Documento;
  }

  ionViewDidLoad() {
    
  }

  habilitarEdicao() {
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharDocumentoVeiculo = false;
  }

  desabilitarEdicao() {
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharDocumentoVeiculo = true;
  }

  gravarEdicao() {
    this.desabilitarEdicao();
    debugger
    
    this.documentoVeiculoService.atualizarDocumentoVeiculo(this.documentoVeiculoModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemSucesso(resposta);
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o documento: ${this.documentoVeiculoModel.Nome_Documento}`);
      });
  }

  deletarDocumentoVeiculo() {
    this.desabilitarEdicao();
    debugger
    this.documentoVeiculoService.deletarDocumentoVeiculo(this.documentoVeiculoModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemSucesso(resposta.toString());
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o veículo: ${this.veiculoModel.Nome}`);
      });
  }
}
