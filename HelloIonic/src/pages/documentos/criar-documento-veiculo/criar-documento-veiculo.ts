import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { HelloIonicConstants } from '../../../app/HelloIonicConstants';
import { TipoDocumento } from '../../../models/TipoDocumento';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { DocumentoVeiculoServiceProvider } from '../../../providers/documento-veiculo-service/documento-veiculo-service';
import { DocumentoVeiculoModel } from '../../../models/DocumentoVeiculoModel';

@IonicPage()
@Component({
  selector: 'page-criar-documento-veiculo',
  templateUrl: 'criar-documento-veiculo.html',
})
export class CriarDocumentoVeiculoPage extends PaginaBase {

  veiculoModel: VeiculoModel;
  tiposDocumentos: Array<TipoDocumento>;
  documentoVeiculoModel: DocumentoVeiculoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, toastCtrl: ToastController, 
    private documentoVeiculoService: DocumentoVeiculoServiceProvider) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    this.veiculoModel = new VeiculoModel();
    this.tiposDocumentos = new 
        Array<TipoDocumento>(
          { Codigo:1, Nome:"Seguro Van"  }, 
          { Codigo:2, Nome:"Seguro Passageiros" },
          { Codigo:3, Nome:"Seguro Van Obrigatório" },
          { Codigo:4, Nome:"IPVA" },
          { Codigo:5, Nome:"Documento Liçença Prefeitura" }
        );
        this.documentoVeiculoModel = new DocumentoVeiculoModel;
        this.veiculoModel = this.navParams.data.veiculoEnviar;
  }

  gravarEdicao(){

    this.documentoVeiculoModel.Codigo_Veiculo = this.veiculoModel.Codigo_Veiculo
    this.documentoVeiculoService.inserirDocumentoVeiculo(this.documentoVeiculoModel).subscribe(
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarDocumentoVeiculoPage');
  }
}
