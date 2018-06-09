import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { UsuarioModel } from '../../../models/UsuarioModel';

@IonicPage()
@Component({
  selector: 'page-detalhes-veiculo',
  templateUrl: 'detalhes-veiculo.html',
})
export class DetalhesVeiculoPage extends PaginaBase {

  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  veiculoModel: VeiculoModel;
  detalharVeiculo: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, alertCtrl: AlertController, 
              public loadingCtrl: LoadingController, toastCtrl: ToastController,
              public veiculoService: VeiculoServiceProvider) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    
    this.verificarCarregamentoTela();
    
  }

  verificarCarregamentoTela(){
    
    this.veiculoModel = this.navParams.data.veiculo;
    
    let usuarioMotorista: UsuarioModel;
    usuarioMotorista = new UsuarioModel();
    usuarioMotorista.Codigo = this.veiculoModel.motorista.Codigo_Usuario;
    
    this.veiculoModel.motorista.Usuario
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesVeiculoPage');
  }

  habilitarEdicao(){
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
    this.detalharVeiculo = false;
  }

  gravarEdicao(){
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
    this.detalharVeiculo = true;
  }
}
