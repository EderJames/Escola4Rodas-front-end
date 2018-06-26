import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { LocalInstituicaoModel } from '../../../models/LocalInstituicaoModel';

/**
 * Generated class for the DetalhesLocalInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-local-instituicao',
  templateUrl: 'detalhes-local-instituicao.html',
})
export class DetalhesLocalInstituicaoPage extends PaginaBase{

  localInstituicaoModel: LocalInstituicaoModel;
  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  detalharLocalInstituicao: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    private localService) {
      
      super({formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
      this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    this.localInstituicaoModel = this.navParams.data.localInstituicao;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesLocalInstituicaoPage');
  }

  habilitarEdicao(){
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharLocalInstituicao = false;
  }

  desabilitarEdicao(){
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharLocalInstituicao = true;
  }

  gravarEdicao(){
    this.desabilitarEdicao();
    debugger
    
    this.localService.atualizarVeiculo(this.localInstituicaoModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        let teste = resposta;
        this.mostrarMensagemSucesso(`${this.localInstituicaoModel.local.nomeLocal} editado com sucesso! `);
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o local de instituição: ${this.localInstituicaoModel.local.nomeLocal}`);
      });
  }
  
  deletarVeiculo(){
    //this.validarExclusaoVeiculo();
    this.localService.deletarVeiculo(this.deletarVeiculo).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        let teste = resposta;
        this.mostrarMensagemSucesso(`${this.localInstituicaoModel.local.nomeLocal} excluído com sucesso! `);
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o local de instituição: ${this.localInstituicaoModel.local.nomeLocal}`);
      });
  }

}
