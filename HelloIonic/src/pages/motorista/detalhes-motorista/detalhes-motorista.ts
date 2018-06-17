import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';

@IonicPage()
@Component({
  selector: 'page-detalhes-motorista',
  templateUrl: 'detalhes-motorista.html',
})
export class DetalhesMotoristaPage extends PaginaBase {

  motoristaModel: MotoristaModel;
  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  detalharMotorista: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController,
     public alertCtrl: AlertController, private motoristaService : MotoristaServiceProvider) {
      
      super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
      this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    debugger
    this.motoristaModel = this.navParams.data.motorista
    this.motoristaModel.Veiculos = null;
    this.motoristaModel.Viagens = null;
    this.motoristaModel.Passageiros = null;
    this.motoristaModel.Instituicoes = null;
    this.desabilitarEdicao();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesMotoristaPage');
  }

  habilitarEdicao(){
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharMotorista = false;
  }

  desabilitarEdicao(){
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharMotorista = true;
  }

  atualizarMotorista(){
    debugger
    this.motoristaService.atualizarMotorista(this.motoristaModel).subscribe(
      resposta => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemSucesso(`Motorista ${this.motoristaModel.Usuario.Nome} editado com sucesso!`);
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao editar o motorista: ${this.motoristaModel.Usuario.Nome}`);
      });
  }

  excluirMotorista(){
    this.motoristaService.deletarMotorista(this.motoristaModel).subscribe(
      respostas => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemSucesso(`Motorista ${this.motoristaModel.Usuario.Nome} deletado com sucesso!`);
      },
      erro => {
        debugger
        this.esconderLoading();
        this.mostrarMensagemErro(`Não foi possível deletar o motorista ${this.motoristaModel.Usuario.Nome}!`);
      });
  }
}
