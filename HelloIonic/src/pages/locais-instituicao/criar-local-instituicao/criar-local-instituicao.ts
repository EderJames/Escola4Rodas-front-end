import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { LocalInstituicaoModel } from '../../../models/LocalInstituicaoModel';
import { LocalModel } from '../../../models/LocalModel';

/**
 * Generated class for the CriarLocalInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-local-instituicao',
  templateUrl: 'criar-local-instituicao.html',
})
export class CriarLocalInstituicaoPage extends PaginaBase {

  localInstituicaoModel : LocalInstituicaoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
      
      super({formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
      this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    this.localInstituicaoModel = new LocalInstituicaoModel();
    this.localInstituicaoModel.local = new LocalModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarLocalInstituicaoPage');
  }
}