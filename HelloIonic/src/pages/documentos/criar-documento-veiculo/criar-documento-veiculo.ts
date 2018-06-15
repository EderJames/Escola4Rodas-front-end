import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { HelloIonicConstants } from '../../../app/HelloIonicConstants';
import { TipoDocumento } from '../../../models/TipoDocumento';

@IonicPage()
@Component({
  selector: 'page-criar-documento-veiculo',
  templateUrl: 'criar-documento-veiculo.html',
})
export class CriarDocumentoVeiculoPage extends PaginaBase {

  veiculoModel: VeiculoModel;
  tiposDocumentos: Array<TipoDocumento>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, toastCtrl: ToastController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    
    this.veiculoModel = new VeiculoModel();
    this.tiposDocumentos = new 
        Array<TipoDocumento>(
          { Codigo:1, Nome:"Seguro Van"  }, 
          { Codigo:2, Nome:"Seguro Passageiros" },
          { Codigo:3, Nome:"Seguro Van Obrigatório" },
          { Codigo:4, Nome:"IPVA" },
          { Codigo:5, Nome:"Documento Liçença Prefeitura" }
        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarDocumentoVeiculoPage');
  }
}
