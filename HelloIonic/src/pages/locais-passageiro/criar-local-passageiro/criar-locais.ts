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
    let dia1 : DiaSemanaModel;
    dia1 = new DiaSemanaModel();
    dia1.codigo = 1;
    dia1.diaSemana = "Segunda-feira";
    
    let dia2 : DiaSemanaModel;
    dia2 = new DiaSemanaModel();
    dia2.codigo = 2;
    dia2.diaSemana = "Terça-feira";

    let dia3 : DiaSemanaModel;
    dia3 = new DiaSemanaModel();
    dia3.codigo = 3;
    dia3.diaSemana = "Quarta-feira";

    let dia4 : DiaSemanaModel;
    dia4 = new DiaSemanaModel();
    dia4.codigo = 3;
    dia4.diaSemana = "Quarta-feira";

    this.diasSemana.push(dia1);
    this.diasSemana.push(dia2);
    this.diasSemana.push(dia3);
    this.diasSemana.push(dia4);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarLocaisPage');
  }
}
