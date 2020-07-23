import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { DiaSemanaModel } from '../../../models/DiaSemanaModel';
import { LocalPassageiroModel } from '../../../models/LocalPassageiroModel';
import { FormBuilder } from '@angular/forms';
import { LocalModel } from '../../../models/LocalModel';
import { DiaSemanLocalModel } from '../../../models/DiaSemanaLocalModel';
import { PassageiroModel } from '../../../models/PassageiroModel';
import { DiaSemanaViagemModel } from '../../../models/DiaSemanaViagemModel';
import { DiaSemanaServiceProvider } from '../../../providers/dia-semana-service/dia-semana-service';
import { DetalhesPassageiroPage } from '../../passageiro/detalhes-passageiro/detalhes-passageiro';
import { CriarPassageiroPage } from '../../passageiro/criar-passageiro/criar-passageiro';

@IonicPage()
@Component({
  selector: 'page-criar-locais',
  templateUrl: 'criar-locais.html',
})
export class CriarLocaisPage extends PaginaBase {

  localPassageiroModel : LocalPassageiroModel;
  passageiroModel: PassageiroModel;
  diaSemanaDisponiveis : DiaSemanaModel[];
  diasSemanaLocal: Array<DiaSemanLocalModel>;
  tipoLocal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl : AlertController, public loadingCtrl: LoadingController,
    public toastCtrl : ToastController, public formBulder: FormBuilder,
    private diaSemanaService : DiaSemanaServiceProvider) {
    super({formBuilder: formBulder, alertCtrl: alertCtrl, 
      loadingCtrl: loadingCtrl, toastCtrl: toastCtrl,
      });
    
    this.verificarCarregamentoTela(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarLocaisPage');
  }

  criarLocal(){
    debugger
    if(this.passageiroModel != null){
      this.localPassageiroModel.Codigo_Passageiro = this.passageiroModel.Codigo_Usuario;
    }
    else{
      this.passageiroModel = new PassageiroModel();
    }
    
    this.localPassageiroModel.Codigo_Tipo_Local = this.tipoLocal;
    this.passageiroModel.locaisPassageiro.push(this.localPassageiroModel);
    
    if(this.passageiroModel.Codigo_Usuario != 0){
      this.navCtrl.push(DetalhesPassageiroPage, {passageiro: this.passageiroModel});
    }
    else{
      this.navCtrl.push(CriarPassageiroPage, {passageiro: this.passageiroModel});
    }
  }

  verificarCarregamentoTela(){
    this.passageiroModel = this.navParams.data.passageiro;
    this.tipoLocal = this.navParams.data.tipoLocal;
    this.localPassageiroModel = new LocalPassageiroModel();
    this.localPassageiroModel.Local = new LocalModel();
    this.localPassageiroModel.DiaSemanaLocal = new Array<DiaSemanLocalModel>();
    this.diaSemanaDisponiveis = new Array<DiaSemanaModel>();
    this.diasSemanaLocal = new Array<DiaSemanLocalModel>();
    this.buscarDiasSemana();
  }

  buscarDiasSemana() {
    debugger
    this.diaSemanaService.listarDiaSemana().subscribe(
      resposta => {
        debugger
        this.diaSemanaDisponiveis = resposta;
        
        for(let i : number = 0; i < this.diaSemanaDisponiveis.length; i++){
          this.diasSemanaLocal.push(new DiaSemanLocalModel);
          this.diasSemanaLocal[i].codigo = this.diaSemanaDisponiveis[i].codigo;
          this.diasSemanaLocal[i].diaSemana = this.diaSemanaDisponiveis[i];
        }
      },
      erro => {
        this.mostrarMensagemErro("Não foi possível carregar os dias da semana disponíveis");
      });
  }
}
