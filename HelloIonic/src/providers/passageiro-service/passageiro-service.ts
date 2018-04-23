import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IPassageiroService } from '../../providers.interfaces/IPassageiroService';
import { PassageiroModel } from '../../models/PassageiroModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';

/*
  Generated class for the PassageiroServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PassageiroServiceProvider implements IPassageiroService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello PassageiroServiceProvider Provider');
  }


  listarPassageiros(): Observable<PassageiroModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL_PROXY_4RODAS + HelloIonicConstants.Passageiro.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       let resultado: PassageiroModel[] = resp.map(function (passageiro, index, arr){
          let p : PassageiroModel = new PassageiroModel();
          
          p.codigoFormaPagamento = passageiro.codigoFormaPagamento;
          p.codigoMotorista = passageiro.codigoMotorista;
          p.codigoUsuario = passageiro.codigoUsuario;
          p.dthr = passageiro.dthr;
          p.instituicoes = passageiro.instituicoes
          p.locaisPassageiro = passageiro.locaisPassageiro;
          p.motorista = passageiro.motorista;
          p.pagamentos = passageiro.pagamentos;
          p.rotas = passageiro.rotas;
          p.tipoPassageiro = passageiro.tipoPassageiro;
          p.tipoViagem = passageiro.tipoViagem;
          p.usuario = passageiro.usuario;
          p.viagens = p.viagens;

          return p;
       });

       return resultado;
      });
    });
  }

}
