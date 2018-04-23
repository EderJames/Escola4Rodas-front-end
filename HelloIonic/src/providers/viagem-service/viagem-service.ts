import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ViagemModel } from '../../models/ViagemModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IViagemService } from '../../providers.interfaces/IViagemService';

/*
  Generated class for the ViagemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ViagemServiceProvider implements IViagemService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello ViagemServiceProvider Provider');
  }

  listarViagens(): Observable<ViagemModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL_PROXY_4RODAS + HelloIonicConstants.Viagem.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       alert("" + resp.data);
       let resultado: ViagemModel[] = resp.map(function (viagem, index, arr){
          let v : ViagemModel = new ViagemModel();
          v.codigo = viagem.codigo;
          v.codigoVeiculo = viagem.codigoVeiculo;
          v.dataInicio = viagem.dataInicio;
          v.diasSemanaViagem = viagem.diasSemanaViagem;
          v.instituicoes = viagem.instituicoes;
          v.nome = viagem.nome;
          v.passageiros = viagem.passageiros;
          v.tipoViagem = viagem.tipoViagem;
          v.veiculo = viagem.veiculo;

          return v;
       });

       return resultado;
      });
    });
  }

}
