import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { PassageiroModel } from '../../../models/PassageiroModel';
import { PassageiroServiceProvider } from '../../../providers/passageiro-service/passageiro-service';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { CriarPassageiroPage } from '../criar-passageiro/criar-passageiro';
import { DetalhesPassageiroPage } from '../detalhes-passageiro/detalhes-passageiro';

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
  esconderEnvioEmail : boolean  = false;

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
        this.mostrarMensagemErro(`Erro ao buscar os passageiros: ${erro}`);
      });
  }

  novoPassageiro(){
    alert("novo passageiro");
    //this.navCtrl.setRoot(MenuMotoristaPage, {}, {animate: true, direction: 'forward'});
    this.navCtrl.setRoot(CriarPassageiroPage, {}, {animate: true, direction: 'forward'});
  }

  filtrarInadimplentes(){
    alert("filtrando passageiros");
    this.esconderEnvioEmail = false;
  }

  enviarEmailInadimplentes(){
    alert("Enviando e-mail para inadimplentes");
  }

  detalharPassageiro(passageiro : PassageiroModel){
    debugger
    this.navCtrl.push(DetalhesPassageiroPage, {
      passageiro: passageiro
    });
  }
}
