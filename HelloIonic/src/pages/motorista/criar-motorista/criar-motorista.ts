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

    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela() {
    debugger
    this.motoristaModel = new MotoristaModel();
    this.motoristaModel.Usuario = new UsuarioModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarMotoristaPage');
  }

  adicionarMotorista() {
    debugger
    this.motoristaService.inserirMotorista(this.motoristaModel).subscribe(
      resposta => {
        this.mostrarMensagemSucesso(`Motorista ${this.motoristaModel.Usuario.Nome} adicionado com sucesso`);
      },
      erro => {
        this.mostrarMensagemErro(`Não foi possível adicionar o motorista ${this.motoristaModel.Usuario.Nome}`);
      });
  }
}
