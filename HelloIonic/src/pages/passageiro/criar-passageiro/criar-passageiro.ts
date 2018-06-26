import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { PassageiroModel } from '../../../models/PassageiroModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { LocalPassageiroModel } from '../../../models/LocalPassageiroModel';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { MenuController } from 'ionic-angular';
import { CriarLocaisPage } from '../../locais-passageiro/criar-local-passageiro/criar-locais';


@IonicPage()
@Component({
  selector: 'page-criar-passageiro',
  templateUrl: 'criar-passageiro.html',
})
export class CriarPassageiroPage extends PaginaBase {

  passageiroModel : PassageiroModel;
  passageiroFormGroup : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl : AlertController, public loadingCtrl: LoadingController,
              public toastCtrl : ToastController, public formBulder: FormBuilder,
              public menuCtrl : MenuController) {
    super({formBuilder: formBulder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    this.passageiroModel = new PassageiroModel();
    this.passageiroModel.usuario = new UsuarioModel();
    this.passageiroModel.locaisPassageiro = new Array<LocalPassageiroModel>();
    this.passageiroModel.instituicoes = new Array<InstituicaoModel>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarPassageiroPage');
  }

  adicionarLocalPartida(){
    this.navCtrl.setRoot(CriarLocaisPage, {}, {animate: true, direction: 'forward'});
  }

  adicionarLocalSaida(){
    this.navCtrl.setRoot(CriarLocaisPage, {}, {animate: true, direction: 'forward'});
  }

  alocarAlunoEmInstituicao(){
    
  }
}
