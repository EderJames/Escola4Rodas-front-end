import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { DiaSemanaModel } from '../../../models/DiaSemanaModel';
import { LocalPassageiroModel } from '../../../models/LocalPassageiroModel';
import { FormBuilder } from '@angular/forms';
import { LocalModel } from '../../../models/LocalModel';
import { DiaSemanLocalModel } from '../../../models/DiaSemanaLocalModel';

@IonicPage()
@Component({
  selector: 'page-criar-locais',
  templateUrl: 'criar-locais.html',
})
export class CriarLocaisPage extends PaginaBase {

  diasSemana : DiaSemanaModel[];
  
  localPassageiroModel : LocalPassageiroModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController, public loadingCtrl: LoadingController,
    public toastCtrl : ToastController, public formBulder: FormBuilder) {
    super({formBuilder: formBulder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    
    this.localPassageiroModel = new LocalPassageiroModel();
    this.localPassageiroModel.local = new LocalModel();
    this.localPassageiroModel.diasSemana = new Array<DiaSemanLocalModel>();
    
    this.diasSemana = new Array<DiaSemanaModel>();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarLocaisPage');
  }

  criarLocal(){
    
  }
}
