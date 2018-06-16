import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { DocumentoVeiculoModel } from '../../../models/DocumentoVeiculoModel';
import { DetalhesDocumentoVeiculoPage } from '../detalhes-documento-veiculo/detalhes-documento-veiculo';
import { CriarDocumentoVeiculoPage } from '../criar-documento-veiculo/criar-documento-veiculo';

@IonicPage()
@Component({
  selector: 'page-documentos-veiculo',
  templateUrl: 'documentos-veiculo.html',
})
export class DocumentosVeiculoPage extends PaginaBase {

  veiculoModel: VeiculoModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, toastCtrl: ToastController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    debugger
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela(){
    debugger
    this.veiculoModel = this.navParams.data.veiculoParaDocumentos;
    if(this.veiculoModel.Documentos.length == 0){
      this.veiculoModel.Documentos = new Array<DocumentoVeiculoModel>();
    }
  }

  ionViewDidLoad() {
    debugger
  }

  novoDocumento(){
    let veiculoEnviar = this.veiculoModel;
    this.navCtrl.push(CriarDocumentoVeiculoPage, {veiculoEnviar});
  }

  detalhesDocumentoVeiculo(documentoVeiculo : DocumentoVeiculoModel){
    debugger
    this.navCtrl.push(DetalhesDocumentoVeiculoPage, {documentoVeiculo});
  }
}
