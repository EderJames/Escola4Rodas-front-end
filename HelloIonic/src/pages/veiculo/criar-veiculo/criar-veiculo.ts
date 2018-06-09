import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { FormBuilder } from '@angular/forms';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';

@IonicPage()
@Component({
  selector: 'page-criar-veiculo',
  templateUrl: 'criar-veiculo.html',
})
export class CriarVeiculoPage extends PaginaBase {

  veiculoModel : VeiculoModel;
  motoristasDisponiveis: Array<MotoristaModel>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public formBuilder: FormBuilder, public alertCtrl: AlertController,
   public loadingCtrl: LoadingController, toastCtrl: ToastController,
   private veiculoService: VeiculoServiceProvider, private motoristaService: MotoristaServiceProvider) {
    
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    this.veiculoModel = new VeiculoModel();
    this.veiculoModel.motorista = new MotoristaModel();
    this.veiculoModel.motorista.Usuario = new UsuarioModel();            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarVeiculoPage');
  }

  obterMotoristas(){
    this.mostrarLoading("Buscando motoristas");
      this.motoristaService.listarMotoristas().subscribe(
        resposta => {
          this.esconderLoading();
          this.motoristasDisponiveis = resposta;
        },
        erro => {
          this.esconderLoading();
          this.mostrarMensagemErro(`Erro ao buscar os motoristas disponíveis: ${erro}`);
        });
  }

  
}
