import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { DetalhesLocalInstituicaoPage } from '../../locais-instituicao/detalhes-local-instituicao/detalhes-local-instituicao';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the DetalhesInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-instituicao',
  templateUrl: 'detalhes-instituicao.html',
})
export class DetalhesInstituicaoPage extends PaginaBase {

  instituicaoModel : InstituicaoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder,
              alertCtrl: AlertController, loadingCtrl: LoadingController,
              toastCtrl: ToastController) {

                super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    this.verificarCarregamentoTela();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesInstituicaoPage');
  }

  verificarCarregamentoTela(){
    debugger
    this.instituicaoModel = this.navParams.data.instituicao;
  }

  gravarInstituicao(){

  }

  detalharLocal(){
    debugger
    this.navCtrl.push(DetalhesLocalInstituicaoPage, {
      localInstituicaoModel: this.instituicaoModel.localInstituicao
    });
  }
}
