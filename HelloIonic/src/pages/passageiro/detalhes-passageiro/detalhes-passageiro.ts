import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, MenuController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { PassageiroModel } from '../../../models/PassageiroModel';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { LocalPassageiroModel } from '../../../models/LocalPassageiroModel';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { CriarLocaisPage } from '../../locais-passageiro/criar-local-passageiro/criar-locais';

@IonicPage()
@Component({
  selector: 'page-detalhes-passageiro',
  templateUrl: 'detalhes-passageiro.html',
})

export class DetalhesPassageiroPage extends PaginaBase{

  passageiroModel : PassageiroModel;
  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  detalharPassageiro: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController, public loadingCtrl: LoadingController,
    public toastCtrl : ToastController, public formBulder: FormBuilder,
    public menuCtrl : MenuController) {
  
      super({formBuilder: formBulder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
      this.verificarCarregamentoTela();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPassageiroPage');
  }

  habilitarEdicao(){
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharPassageiro = false;
  }

  desabilitarEdicao(){
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharPassageiro = true;
  }

  gravar(){
    this.desabilitarEdicao();
    //this.localService.atualizarLocal(this.localInstituicaoModel.local);
    debugger    
  }

  verificarCarregamentoTela(){
    debugger
    this.passageiroModel = this.navParams.data.passageiro;
  }

  adicionarLocalPartida(){
    this.navCtrl.push(CriarLocaisPage, {});
  }

}
