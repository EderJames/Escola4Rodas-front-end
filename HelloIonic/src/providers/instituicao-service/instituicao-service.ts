import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IInstituicaoService } from '../../providers.interfaces/IInstituicaoService';
import { Observable } from 'rxjs/Observable';
import { InstituicaoModel } from '../../models/InstituicaoModel';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';

/*
  Generated class for the InstituicaoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InstituicaoServiceProvider implements IInstituicaoService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello InstituicaoServiceProvider Provider');
  }

  listarInstituicoes(): Observable<InstituicaoModel[]> {
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
        .then(
          data => { return data.token },
          err => { return null }
        )
    );

    return tokenObservable.flatMap(token => {
      let headers : Headers = new Headers();
      headers.set('token', token);

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL_PROXY_4RODAS + HelloIonicConstants.Instituicao.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       alert("" + resp);
       let resultado: InstituicaoModel[] = resp.map(function (instituicao, index, arr){
          let i : InstituicaoModel = new InstituicaoModel();
          i.Codigo = instituicao.Codigo_Instituicao;
          i.nome = instituicao.Nome;
          i.codigoLocal = instituicao.Codigo_Local;
          i.dthr = instituicao.Dthr;
          i.localInstituicao = instituicao.Local;
          i.passageiroInstituicao = instituicao.Passageiros;
          i.motoristas = instituicao.Motoristas;
          i.Viagens = instituicao.Viagens;
          
          return i;
       });

       return resultado;
      });
    });
  }
}
