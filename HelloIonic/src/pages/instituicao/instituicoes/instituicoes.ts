import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { DetalhesInstituicaoPage } from '../detalhes-instituicao/detalhes-instituicao';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { InstituicaoServiceProvider } from '../../../providers/instituicao-service/instituicao-service';
import { CriarInstituicaoPage } from '../criar-instituicao/criar-instituicao';


@IonicPage()
@Component({
  selector: 'page-instituicoes',
  templateUrl: 'instituicoes.html',
})
export class InstituicoesPage extends PaginaBase {

  instituicoes: InstituicaoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public loadingCtrl: LoadingController, public toastCtrl: ToastController,
      public alertCtrl: AlertController, private instituicaoService : InstituicaoServiceProvider) {
    
        super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando instituições");
    this.instituicaoService.listarInstituicoes().subscribe(
      resposta => {
        this.esconderLoading();
        this.instituicoes = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });
  }

  mostrarDetalhesProduto(instituicao: InstituicaoModel){
    this.navCtrl.push(DetalhesInstituicaoPage, {
      instituicao: instituicao
    });
  }

  novaInstituicao(){
    this.navCtrl.setRoot(CriarInstituicaoPage, {}, {animate: true, direction: 'forward'});
  }

}
