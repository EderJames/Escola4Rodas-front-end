import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PaginaBase } from '../../infraestrutura/PaginaBase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HelloIonicValidadores } from '../../validadores/HelloIonicValidadores';
import {LoginModel} from '../../models/LoginModel';
import {HomePage} from '../home/home'
import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import {IAutenticacaoService} from '../../providers.interfaces/IAutenticacaoService';
import { MenuMotoristaPage } from '../menu-motorista/menu-motorista';
import { NativeStorage } from '@ionic-native/native-storage';
import { CriarPassageiroPage } from '../passageiro/criar-passageiro/criar-passageiro';
import { UsuarioModel } from '../../models/UsuarioModel';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends PaginaBase {

  loginFrmGroup : FormGroup;
  foiSubmetido : boolean;
  loginModel : LoginModel;
  usuarioLogado : UsuarioModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, 
    public alertCtrl : AlertController, @Inject('IAutenticacaoService') public autenticacaoService: IAutenticacaoService,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public menuCtrl: MenuController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    this.foiSubmetido = false;
    this.loginModel = new LoginModel();

    this.loginModel.email = "edeleno12@gmail.com";
    this.loginModel.senha = "123456eder897412";
    this.desativarMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.foiSubmetido = true;
    this.esconderToast();
    debugger;
    if(this.loginFrmGroup.valid){
      this.mostrarLoading("Fazendo login....");
      
      debugger

      this.autenticacaoService.obterToken(this.loginModel).subscribe(
        data =>{
          debugger
          console.log("token obtido com sucesso")
        },
        err =>{
          this.mostrarMensagemErro("Não foi possível realizar login.");
        }
      );

      this.efetuarLogin();
    }  
  }

  efetuarLogin() : UsuarioModel{
    
    this.autenticacaoService.login(this.loginModel).subscribe(
      data => {
        debugger
        this.esconderLoading();

        this.usuarioLogado = data;
        let usuarioLogadoEnviar = this.usuarioLogado;
        this.mostrarToast('Login realizado com sucesso');
        this.navCtrl.setRoot(HomePage, {usuarioLogadoEnviar}, {animate: true, direction: 'forward'});
      },
      err => {
        debugger
        this.esconderLoading();
        this.mostrarToast('Não foi possível realizar o login');
      }
    );

    return this.usuarioLogado;
  }

  protected doCarregarValidadores() : void{
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, HelloIonicValidadores.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

  desativarMenu() {
    this.menuCtrl.enable(false);
  }
  
}
