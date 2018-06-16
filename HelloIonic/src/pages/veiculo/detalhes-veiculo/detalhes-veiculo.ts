import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';
import { ViagemModel } from '../../../models/ViagemModel';
import { DocumentosVeiculoPage } from '../../documentos/documentos-veiculo/documentos-veiculo';


@IonicPage()
@Component({
  selector: 'page-detalhes-veiculo',
  templateUrl: 'detalhes-veiculo.html',
})
export class DetalhesVeiculoPage extends PaginaBase {

  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  veiculoModel: VeiculoModel;
  detalharVeiculo: boolean;
  motoristasDisponiveis = new Array<MotoristaModel>();
  motoristaAtual: MotoristaModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, alertCtrl: AlertController, 
              public loadingCtrl: LoadingController, toastCtrl: ToastController,
              public veiculoService: VeiculoServiceProvider, public motoristaService: MotoristaServiceProvider) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    
    this.verificarCarregamentoTela();
    this.motoristaAtual = new MotoristaModel();
    this.motoristaAtual.Usuario = new UsuarioModel();
  }

  verificarCarregamentoTela(){
    debugger
    this.veiculoModel = this.navParams.data.veiculo;
    if(this.veiculoModel.Motorista && this.veiculoModel.Motorista.Usuario){
      this.motoristaAtual = this.veiculoModel.Motorista;
    }
    this.desabilitarEdicao();
    
    this.motoristaService.listarMotoristas().subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        this.motoristasDisponiveis = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os motoristas: ${erro}`);
      });
  }

  listarDocumentosVan(){
    debugger
    let veiculoParaDocumentos = this.veiculoModel;
    this.navCtrl.push(DocumentosVeiculoPage, {veiculoParaDocumentos});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesVeiculoPage');
  }

  habilitarEdicao(){
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharVeiculo = false;
  }

  desabilitarEdicao(){
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharVeiculo = true;
  }

  gravarEdicao(){
    this.desabilitarEdicao();
    debugger
    this.veiculoModel.Codigo_Motorista = this.veiculoModel.Motorista.Codigo_Usuario;
    this.veiculoService.atualizarVeiculo(this.veiculoModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        let teste = resposta;
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o veículo: ${this.veiculoModel.Nome}`);
      });
  }
  
  deletarVeiculo(){
    this.validarExclusaoVeiculo();
    this.veiculoService.deletarVeiculo(this.veiculoModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        let teste = resposta;
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao deletar o veículo: ${this.veiculoModel.Nome}`);
      });
  }

  validarExclusaoVeiculo(){
    if(this.veiculoModel.Motorista){
      this.mostrarMensagemErro(`O veículo está vinculado ao motorista: 
      ${this.veiculoModel.Motorista.Usuario.Nome}`);
    }
    else if(this.veiculoModel.Viagens){
      let viagensVinculadasVeiculo: ViagemModel[];
      this.mostrarMensagemErro(`O veículo está vinculado as viagens:`);
    }
  }
}
