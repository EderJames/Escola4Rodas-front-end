import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IAutenticacaoService } from '../providers.interfaces/IAutenticacaoService';
import { LoginModel } from '../models/LoginModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstants } from '../app/HelloIonicConstants';
import { NativeStorage } from '@ionic-native/native-storage';
import { UsuarioModel } from '../models/UsuarioModel';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Injectable()
export class AutenticacaoService implements IAutenticacaoService {
  token : string;
  constructor(public http: Http, private nativeStorage: NativeStorage) {
    console.log("Hello AutenticacaoService Provider");
  }

  obterToken(loginModel : LoginModel): Observable<void> {
    if (!loginModel || !loginModel.email || !loginModel.senha) {
      return Observable.throw("e-mail e/ou senha não informados");
    }
    
    let corpoRequisicao = {
      username: loginModel.email,
      password: loginModel.senha,
      grant_type: "password"
    }

    var p =[];
      for (var key in corpoRequisicao)
      {
        p.push(key + '=' + encodeURIComponent(corpoRequisicao[key]));
      }
     var dados = p.join('&');

    let headers : Headers = new Headers();
    headers.append('Content-type','application/x-www-form-urlencoded');
    headers.append('Tipo_Usuario', 'motorista');

    return this.http.post(HelloIonicConstants.TOKEN_URL  + HelloIonicConstants.Auth.Token, 
      dados, { headers: headers} )
      .map(response => {
        debugger;
        let resp = response.json();
        debugger;

        this.nativeStorage.setItem('token_autenticacao', {token: resp.access_token})
        .then(
          () => console.log('Token armazenado'),
          (erro) => console.log(erro)
        );

      });
  }

  login(loginModel: LoginModel): Observable<UsuarioModel> {

    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
        .then(
          data => { return data.token },
          err => { return null }
        )
    );
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();

      headers.append('Content-type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.Usuario.Login,
        JSON.stringify(loginModel), { headers: headers })
        .map(response => {
          debugger;
          let resp = response.json();

          let usuarioLogado: UsuarioModel;
          usuarioLogado = new UsuarioModel();

          usuarioLogado.Codigo = resp.Codigo;
          usuarioLogado.Dthr = resp.Dthr;
          usuarioLogado.Email = resp.Email;
          usuarioLogado.Id = resp.Id;
          usuarioLogado.Idade = resp.Idade;
          usuarioLogado.Login = resp.Login;
          usuarioLogado.Nome = resp.Nome;
          usuarioLogado.Senha = resp.Senha;
          usuarioLogado.Telefone = resp.Telefone;

          return usuarioLogado;//response.json();
        });
    });

  }

  logout(): void {

  }
}
