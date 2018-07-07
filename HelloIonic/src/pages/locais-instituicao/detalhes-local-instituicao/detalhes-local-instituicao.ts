import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { LocalInstituicaoModel } from '../../../models/LocalInstituicaoModel';
//import { LocalServiceProvider } from '../../../providers/local-service/local-service';

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
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
      
      super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
      this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    debugger;
    this.localInstituicaoModel = this.navParams.data.localInstituicaoModel;
    this.desabilitarEdicao();
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

  gravar(){
    this.desabilitarEdicao();
    //this.localService.atualizarLocal(this.localInstituicaoModel.local);
    debugger    
  }
}
