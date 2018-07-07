import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IInstituicaoService } from '../../providers.interfaces/IInstituicaoService';
import { Observable } from 'rxjs/Observable';
import { InstituicaoModel } from '../../models/InstituicaoModel';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { LocalInstituicaoModel } from '../../models/LocalInstituicaoModel';
import { LocalModel } from '../../models/LocalModel';

@Injectable()
export class InstituicaoServiceProvider implements IInstituicaoService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello InstituicaoServiceProvider Provider');
  }

  listarInstituicoes(): Observable<InstituicaoModel[]> {
    debugger;
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
        .then(
          data => { return data.token },
          err => { return null }
        )
    );

    return tokenObservable.flatMap(token => {
      let headers : Headers = new Headers();
      headers.set('Authorization',  `Bearer ${token}`);
      
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Instituicao.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       debugger;
       let resultado: InstituicaoModel[] = resp.map(function (instituicao, index, arr){
          let i : InstituicaoModel = new InstituicaoModel();
          i.Codigo = instituicao.Codigo_Instituicao;
          i.nome = instituicao.Nome;
          i.codigoLocal = instituicao.Codigo_Local;
          i.dthr = instituicao.Dthr;
          //i.localInstituicao = instituicao.LocalInstituicao;
          i.localInstituicao = new LocalInstituicaoModel();
          i.localInstituicao.codigoInstituicao = instituicao.LocalInstituicao.Codigo_Instituicao;
          i.localInstituicao.codigoLocal = instituicao.LocalInstituicao.Codigo_Local;
          i.localInstituicao.instituicao = instituicao.LocalInstituicao.Instituicao;
          
          debugger
          i.localInstituicao.local = new LocalModel();
          i.localInstituicao.local.codigo = instituicao.LocalInstituicao.Local.Codigo;
          i.localInstituicao.local.bairro = instituicao.LocalInstituicao.Local.Bairro;
          i.localInstituicao.local.nomeLocal = instituicao.LocalInstituicao.Local.Nome_Local;
          i.localInstituicao.local.nomeRua = instituicao.LocalInstituicao.Local.Nome_Rua;
          i.localInstituicao.local.numero = instituicao.LocalInstituicao.Local.Numero;

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
