import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { ViagemServiceProvider } from '../../../providers/viagem-service/viagem-service';
import { ViagemModel } from '../../../models/ViagemModel';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { TipoViagem } from '../../../models/TipoViagem';
import { MotoristaServiceProvider } from '../../../providers/motorista-service/motorista-service';
import { VeiculoServiceProvider } from '../../../providers/veiculo-service/veiculo-service';
import { InstituicaoServiceProvider } from '../../../providers/instituicao-service/instituicao-service';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { DiaSemanaModel } from '../../../models/DiaSemanaModel';
import { DiaSemanaServiceProvider } from '../../../providers/dia-semana-service/dia-semana-service';

@IonicPage()
@Component({
  selector: 'page-detalhes-viagem',
  templateUrl: 'detalhes-viagem.html',
})
export class DetalhesViagemPage extends PaginaBase {
  viagemModel: ViagemModel;
  motoristasDisponiveis: Array<MotoristaModel>;
  veiculosDisponiveis: Array<VeiculoModel>;
  tiposViagensDisponiveis: Array<TipoViagem>;
  instituicoesDisponiveis: Array<InstituicaoModel>;
  diaSemanaDisponiveis: Array<DiaSemanaModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private viagemService: ViagemServiceProvider,
    private motoristaService: MotoristaServiceProvider, private veiculoService: VeiculoServiceProvider,
    private instituicaoService: InstituicaoServiceProvider, private diaSemanaService : DiaSemanaServiceProvider) {

    super({ alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela() {
    //this.viagemModel = this.navCtrl.na
    this.buscarMotoristas();
    this.buscarVeiculos();
    this.buscarInstituicoes();
    this.buscarTiposViagem();
    this.buscarDiasSemana();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesViagemPage');
  }

  buscarMotoristas() {
    this.motoristaService.listarMotoristas().subscribe(
      resposta => {
        this.motoristasDisponiveis = resposta;
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os motoristas disponíveis");
      });
  }

  buscarVeiculos() {
    this.veiculoService.listarVeiculos().subscribe(
      resposta => {
        this.veiculosDisponiveis = resposta;
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os veículos disponíveis");
      });
  }

  buscarInstituicoes() {
    this.instituicaoService.listarInstituicoes().subscribe(
      resposta => {
        this.instituicoesDisponiveis = resposta;
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os veículos disponíveis");
      });
  }

  buscarDiasSemana() {
    this.diaSemanaService.listarDiaSemana().subscribe(
      resposta => {
        this.diaSemanaDisponiveis = resposta;
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os veículos disponíveis");
      });
  }

  buscarTiposViagem() {
    this.tiposViagensDisponiveis = new
      Array<TipoViagem>(
        { Codigo: 1, Nome: "Diária" },
        { Codigo: 2, Nome: "Semanal" },
        { Codigo: 3, Nome: "Mensal" }
      );
  }
}
