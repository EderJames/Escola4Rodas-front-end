import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { CriarVeiculoPage } from '../criar-veiculo/criar-veiculo';
import { DetalhesInstituicaoPage } from '../../instituicao/detalhes-instituicao/detalhes-instituicao';
import { DetalhesVeiculoPage } from '../detalhes-veiculo/detalhes-veiculo';

@IonicPage()
@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
})
export class VeiculosPage extends PaginaBase {
  botaoEditar: Boolean;
  veiculos: VeiculoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private veiculoService: VeiculoServiceProvider) {

    super({ alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    this.botaoEditar = false;
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

  novoVeiculo() {
    this.navCtrl.setRoot(CriarVeiculoPage, {}, { animate: true, direction: 'forward' });
  }

  mostrarDetalhesVeiculo(veiculo: VeiculoModel) {
    this.navCtrl.push(DetalhesVeiculoPage, {veiculo: veiculo});
  }
}
