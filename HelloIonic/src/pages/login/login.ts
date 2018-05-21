import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends PaginaBase {

  loginFrmGroup : FormGroup;
  foiSubmetido : boolean;
  loginModel : LoginModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, 
    public alertCtrl : AlertController, @Inject('IAutenticacaoService') public autenticacaoService: IAutenticacaoService,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    super({ formBuilder: formBuilder, alertCtrl: alertCtrl, loadingCtrl: loadingCtrl, toastCtrl: toastCtrl});
    this.foiSubmetido = false;
    this.loginModel = new LoginModel();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void{
    this.foiSubmetido = true;
    this.esconderToast();
    
    if(this.loginFrmGroup.valid){
      this.mostrarLoading("Fazendo login....");
      this.navCtrl.setRoot(MenuMotoristaPage, {}, {animate: true, direction: 'forward'});
      this.autenticacaoService.login(this.loginModel).subscribe(
        data => {
          this.esconderLoading();
          this.navCtrl.setRoot(MenuMotoristaPage, {}, {animate: true, direction: 'forward'});
          this.mostrarToast('Login realizado com sucesso');
        },
        err => {
          this.esconderLoading();
          alert(err);
          this.mostrarToast('Não foi possível realizar o login');
        }
      );
    }  
  }

  protected doCarregarValidadores() : void{
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, HelloIonicValidadores.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

  
}
