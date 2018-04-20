import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstituicaoModel } from '../../../models/InstituicaoModel';

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
export class DetalhesInstituicaoPage {

  instituicao : InstituicaoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.instituicao = navParams.data.instituicao;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesInstituicaoPage');
  }

}
