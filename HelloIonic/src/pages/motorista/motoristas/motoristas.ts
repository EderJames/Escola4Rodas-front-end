import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';
import { CriarMotoristaPage } from '../criar-motorista/criar-motorista';

@IonicPage()
@Component({
  selector: 'page-motoristas',
  templateUrl: 'motoristas.html',
})
export class MotoristasPage  extends PaginaBase {

  motoristas: MotoristaModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController,
     public alertCtrl: AlertController, private motoristaService : MotoristaServiceProvider) {
      super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando produtos");
    this.motoristaService.listarMotoristas().subscribe(
      resposta => {
        this.esconderLoading();
        this.motoristas = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });
  }

  mostrarDetalhesProduto(produto: MotoristaModel){
    //this.navCtrl.push(DetalhesMotorista, {
    //  produto: produto
    //});
  }

  adicionarMotorista(){
    this.navCtrl.setRoot(CriarMotoristaPage, {}, {animate: true, direction: 'forward'});        
  }
}
