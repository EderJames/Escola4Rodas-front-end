import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { ViagemModel } from '../../../models/ViagemModel';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { IViagemService } from '../../../providers.interfaces/IViagemService';
import { ViagemServiceProvider } from '../../../providers/viagem-service/viagem-service';
import { CriarViagemPage } from '../criar-viagem/criar-viagem';
import { DetalhesViagemPage } from '../detalhes-viagem/detalhes-viagem';

/**
 * Generated class for the ViagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage extends PaginaBase {

  viagens: ViagemModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController, public toastCtrl: ToastController,
      public alertCtrl: AlertController, private viagemService : ViagemServiceProvider) {
    
        super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando viagens");
    this.viagemService.listarViagens().subscribe(
      resposta => {
        this.esconderLoading();
        this.viagens = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });
  }

  detalharViagem(viagem: ViagemModel){
    debugger
    this.navCtrl.push(DetalhesViagemPage, {viagem});
  }

  adicionarViagem(){
    this.navCtrl.setRoot(CriarViagemPage, {}, {animate: true, direction: 'forward'});
  }
}
