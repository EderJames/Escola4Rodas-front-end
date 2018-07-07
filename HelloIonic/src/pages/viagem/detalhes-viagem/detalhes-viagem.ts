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
import { DiaSemanaViagemModel } from '../../../models/DiaSemanaViagemModel';

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
  diasSemanaViagemDisponiveis: Array<DiaSemanaViagemModel>;
  exibicaoBtnEditar: boolean;
  exibicaoBtnGravar: boolean;
  detalharViagem: boolean;
  metodoSelecao: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private viagemService: ViagemServiceProvider,
    private motoristaService: MotoristaServiceProvider, private veiculoService: VeiculoServiceProvider,
    private instituicaoService: InstituicaoServiceProvider, private diaSemanaService : DiaSemanaServiceProvider) {

    super({ alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl });
    this.verificarCarregamentoTela();
  }

  verificarCarregamentoTela() {
    debugger
    this.viagemModel = this.navParams.data.viagem;
    this.diasSemanaViagemDisponiveis = new Array<DiaSemanaViagemModel>();
    
    this.metodoSelecao = {
      title: 'Instituições',
      mode: 'md'
    }

    this.buscarDiasSemana();
    this.desabilitarEdicao();
    this.buscarMotoristas();
    this.buscarVeiculos();
    this.buscarInstituicoes();
    this.buscarTiposViagem();
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
    debugger
    this.instituicaoService.listarInstituicoes().subscribe(
      resposta => {
        debugger;
        this.instituicoesDisponiveis = resposta;
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar as instituições disponíveis");
      });
  }

  buscarDiasSemana() {
    debugger
    this.diaSemanaService.listarDiaSemana().subscribe(
      resposta => {
        this.diaSemanaDisponiveis = resposta;
        
        for(let i : number = 0; i < this.diaSemanaDisponiveis.length; i++){
          this.diasSemanaViagemDisponiveis.push(new DiaSemanaViagemModel);
          this.diasSemanaViagemDisponiveis[i].codigo = this.diaSemanaDisponiveis[i].codigo;
          this.diasSemanaViagemDisponiveis[i].diaSemana = this.diaSemanaDisponiveis[i];
          //this.viagemModel.diasSemanaViagem[i].diaSemana = this.diaSemanaDisponiveis[i];
        }
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os dias da semana disponíveis");
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

  habilitarEdicao(){
    this.detalharViagem =  false; 
    this.exibicaoBtnGravar = false;
    this.exibicaoBtnEditar = true;
  }

  desabilitarEdicao(){
    this.detalharViagem = true;
    this.exibicaoBtnGravar = true;
    this.exibicaoBtnEditar = false;
  }

  gerenciarPassageiros(){
    
  }

  gravar(){
    debugger
    this.viagemModel.Codigo_Veiculo = this.viagemModel.VeiculoViagem.Codigo_Veiculo;

    
    this.viagemModel.Instituicoes.forEach(element => {
      element.Codigo_Instituicao = element.Codigo;
    });
   
    this.viagemService.atualizarViagem(this.viagemModel).subscribe(
      resposta=>{
        debugger

      },
      err =>{
        debugger

      });
  }

  excluir(){
    debugger
    this.viagemService.inserirViagem(this.viagemModel).subscribe(
      resposta=>{
        debugger
          
      },
      err =>{
        debugger

      });
  }

  setarMotoristaVeiculo(veiculo : VeiculoModel){
    debugger
    let testeMotorista = veiculo.Motorista.Usuario.Nome;
  }
}
