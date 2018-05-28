import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { InstituicaoModel } from '../../../models/InstituicaoModel';

/**
 * Generated class for the CriarInstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-instituicao',
  templateUrl: 'criar-instituicao.html',
})
export class CriarInstituicaoPage extends PaginaBase {

  localInstituicao: string;
  instituicaoModel: InstituicaoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, alertCtrl: AlertController,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    
                super({formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
                this.instituicaoModel = new InstituicaoModel();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarInstituicaoPage');
  }

  novaInstituicao(){
    alert('Instituição cadastrada com sucesso!');
  }
}
