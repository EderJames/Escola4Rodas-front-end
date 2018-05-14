import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';

/**
 * Generated class for the VeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
})
export class VeiculosPage extends PaginaBase {

  veiculos: VeiculoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController, public toastCtrl: ToastController,
      public alertCtrl: AlertController, private veiculoService : VeiculoServiceProvider) {
    
        super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando veiculos");
    this.veiculoService.listarVeiculos().subscribe(
      resposta => {
        this.esconderLoading();
        this.veiculos = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os veículos: ${erro}`);
      });
  }

  //mostrarDetalhesProduto(viagem: ViagemModel){
    //this.navCtrl.push(DetalhesViagemPage, {
    //  viagem: viagem
  //});

}
