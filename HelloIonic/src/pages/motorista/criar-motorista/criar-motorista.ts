import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';

/**
 * Generated class for the CriarMotoristaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-motorista',
  templateUrl: 'criar-motorista.html',
})
export class CriarMotoristaPage extends PaginaBase {

  motoristaModel: MotoristaModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private motoristaService: MotoristaServiceProvider) {
    super({ alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });

    let usuario: UsuarioModel;
    usuario = new UsuarioModel();
    usuario.Codigo = 1;
    usuario.Nome = "Tio Eder";

    let motorista1: MotoristaModel;
    motorista1 = new MotoristaModel();
    motorista1.Codigo_Usuario = 1;
    motorista1.Cnh = 123456789;
    motorista1.Usuario = usuario;

    this.motoristaModel = motorista1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarMotoristaPage');
  }

  adicionarMotorista() {
    alert("123");
  }
}
