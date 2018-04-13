import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { ProdutoServiceProvider } from '../../providers/produto-service/produto-service';
import { PaginaBase } from '../../infraestrutura/PaginaBase';
import { ProdutoModel } from '../../models/ProdutoModel';
import { DetalhesProdutoPage } from '../detalhes-produto/detalhes-produto';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage extends PaginaBase{

  produtos: ProdutoModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController,
     public alertCtrl: AlertController, private produtoService : ProdutoServiceProvider) {
      super({alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
  }

  ionViewDidLoad() {
    this.mostrarLoading("Buscando produtos");
    this.produtoService.listarProdutos().subscribe(
      resposta => {
        this.esconderLoading();
        this.produtos = resposta;
      },
      erro => {
        this.esconderLoading();
        this.mostrarMensagemErro(`Erro ao buscar os produtos: ${erro}`);
      });
  }

  mostrarDetalhesProduto(produto: ProdutoModel){
    this.navCtrl.push(DetalhesProdutoPage, {
      produto: produto
    });
  }
}
