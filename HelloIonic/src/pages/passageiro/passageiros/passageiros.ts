import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { PassageiroModel } from '../../../models/PassageiroModel';
import { PassageiroServiceProvider } from '../../../providers/passageiro-service/passageiro-service';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';

/**
 * Generated class for the PassageirosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passageiros',
  templateUrl: 'passageiros.html',
})
export class PassageirosPage extends PaginaBase {

  passageiros: PassageiroModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController,
     public alertCtrl: AlertController, private passageiroService : PassageiroServiceProvider) {
      super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando passageiros");
    this.passageiroService.listarPassageiros().subscribe(
      resposta => {
        this.esconderLoading();
        this.passageiros = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });
  }


  mostrarDetalhesProduto(produto: PassageiroModel){
    //this.navCtrl.push(DetalhesMotorista, {
    //  produto: produto
    //});
  }

}
