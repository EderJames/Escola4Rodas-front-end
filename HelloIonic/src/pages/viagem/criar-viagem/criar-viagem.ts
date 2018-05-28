import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { ViagemModel } from '../../../models/ViagemModel';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VeiculoModel } from '../../../models/VeiculoModel';
import { MotoristaModel } from '../../../models/MotoristaModel';
import { UsuarioModel } from '../../../models/UsuarioModel';
import { PaginaBase } from '../../../infraestrutura/PaginaBase';
import { HelloIonicConstants } from '../../../app/HelloIonicConstants';
import { InstituicaoModel } from '../../../models/InstituicaoModel';
import { DiaSemanaModel } from '../../../models/DiaSemanaModel';

/**
 * Generated class for the CriarViagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-viagem',
  templateUrl: 'criar-viagem.html',
})
export class CriarViagemPage extends PaginaBase {
  viagemModel : ViagemModel;
  viagemFormGroup : FormGroup;
  motoristasDisponiveis: Array<MotoristaModel>;
  veiculosDisponiveis: Array<VeiculoModel>;
  tiposViagensDisponiveis: Array<string>;
  diasSemana: Array<DiaSemanaModel>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder : FormBuilder, public alertCtrl : AlertController,
              loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});

    this.viagemModel = new ViagemModel();
    this.viagemModel.VeiculoViagem = new VeiculoModel();
    this.viagemModel.VeiculoViagem.motorista = new MotoristaModel();

    this.motoristasDisponiveis = new Array<MotoristaModel>();
    this.veiculosDisponiveis = new Array<VeiculoModel>();

    let usuario = new UsuarioModel();
    usuario.codigo = 1;
    usuario.nome = "Tio Eder";

    let usuario2  = new UsuarioModel();
    usuario2.codigo = 2;
    usuario2.nome = "Tio Teste";
    
    let motorista1 = new MotoristaModel();
    motorista1.codigoUsuario = 1;
    motorista1.cnh = 123456789;
    motorista1.usuario = usuario;

    let motorista2 = new MotoristaModel();
    motorista1.codigoUsuario = 2;
    motorista2.cnh = 965413578;
    motorista2.usuario = usuario2;
    
    
    this.tiposViagensDisponiveis = new Array<string>();
    this.tiposViagensDisponiveis.push(HelloIonicConstants.tiposViagem.DIARIA);
    this.tiposViagensDisponiveis.push(HelloIonicConstants.tiposViagem.SEMANAL);

    this.motoristasDisponiveis.push(motorista1);
    this.motoristasDisponiveis.push(motorista2);
    this.viagemModel.Instituicoes = new Array<InstituicaoModel>();
    
    let instituicaoCristovao = new InstituicaoModel();
    instituicaoCristovao.Codigo = 1;
    instituicaoCristovao.codigoLocal = 1;
    instituicaoCristovao.nome = "Cristóvão de Mendoza";
    
    let instituicaoMariaAraci = new InstituicaoModel();
    instituicaoMariaAraci.Codigo = 2;
    instituicaoMariaAraci.codigoLocal = 2;
    instituicaoMariaAraci.nome = "Maria Araci";
    
    let instituicaoSilvioDalzotto = new InstituicaoModel();
    instituicaoSilvioDalzotto.Codigo = 3;
    instituicaoSilvioDalzotto.codigoLocal = 3;
    instituicaoSilvioDalzotto.nome = "Silvio Dalzotto";

    this.viagemModel.Instituicoes.push(instituicaoCristovao);
    this.viagemModel.Instituicoes.push(instituicaoMariaAraci);
    this.viagemModel.Instituicoes.push(instituicaoSilvioDalzotto);

    this.diasSemana = new Array<DiaSemanaModel>();
    let dia1 : DiaSemanaModel;
    dia1 = new DiaSemanaModel();
    dia1.codigo = 1;
    dia1.diaSemana = "Segunda-feira";
    
    let dia2 : DiaSemanaModel;
    dia2 = new DiaSemanaModel();
    dia2.codigo = 2;
    dia2.diaSemana = "Terça-feira";

    let dia3 : DiaSemanaModel;
    dia3 = new DiaSemanaModel();
    dia3.codigo = 3;
    dia3.diaSemana = "Quarta-feira";

    let dia4 : DiaSemanaModel;
    dia4 = new DiaSemanaModel();
    dia4.codigo = 4;
    dia4.diaSemana = "Quinta-feira";

    let dia5 : DiaSemanaModel;
    dia5 = new DiaSemanaModel();
    dia5.codigo = 5;
    dia5.diaSemana = "Sexta-feira";

    let dia6 : DiaSemanaModel;
    dia6 = new DiaSemanaModel();
    dia6.codigo = 6;
    dia6.diaSemana = "Sábado";

    this.diasSemana.push(dia1);
    this.diasSemana.push(dia2);
    this.diasSemana.push(dia3);
    this.diasSemana.push(dia4);
    this.diasSemana.push(dia5);
    this.diasSemana.push(dia6);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarViagemPage');
  }
}
