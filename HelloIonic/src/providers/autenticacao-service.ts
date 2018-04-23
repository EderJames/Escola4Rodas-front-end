import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IAutenticacaoService } from '../providers.interfaces/IAutenticacaoService';
import { LoginModel } from '../models/LoginModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstants } from '../app/HelloIonicConstants';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class AutenticacaoService implements IAutenticacaoService {


  token : string;
  constructor(public http: Http, private nativeStorage: NativeStorage) {

    console.log("Hello AutenticacaoService Provider");
  }

  login(loginModel: LoginModel): Observable<void> {
    if (!loginModel || !loginModel.email || !loginModel.senha) {
      return Observable.throw("e-mail e/ou senha não informados");
    }

    let corpoRequisicao = {
      email: loginModel.email,
      senha: loginModel.senha
    }

    let corpoRequisicao2 = {
      UserName: loginModel.email,
      Password: loginModel.senha
    }

    return this.http.post(HelloIonicConstants.BASE_URL_PROXY_4RODAS  + HelloIonicConstants.Auth.LOGIN_PROXY, corpoRequisicao)
      .map(response => {
        let resp = response.json();
        this.nativeStorage.setItem('token_autenticacao', {token: resp.data.token})
                          .then(
                            () => console.log('Token armazenado'),
                            (erro) => alert(erro)
                          );
      });
    
  }

  logout(): void {

  }
}
