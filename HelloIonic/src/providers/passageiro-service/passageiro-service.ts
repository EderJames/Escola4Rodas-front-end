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
      headers.set('Authorization',  `Bearer ${token}`);

      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Passageiro.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       let resultado: PassageiroModel[] = resp.map(function (passageiro, index, arr){
          let p : PassageiroModel = new PassageiroModel();
          
          p.tipoViagem = passageiro.Tipo_Viagem;
          p.codigoFormaPagamento = passageiro.Codigo_Forma_Pagamento;
          p.tipoPassageiro = passageiro.Tipo_Passageiro;
          p.codigoUsuario = passageiro.Codigo_Usuario;
          p.dthr = passageiro.Dthr;
          p.codigoMotorista = passageiro.Codigo_Motorista;
          p.motorista = passageiro.Motorista;
          p.usuario = passageiro.Usuario;
          p.instituicoes = passageiro.Instituicoes;
          p.pagamentos = passageiro.Pagamentos;
          p.rotas = passageiro.Rotas;
          p.locaisPassageiro = passageiro.Locais_Partida;
          p.viagens = passageiro.Viagens;

          return p;
       });

       return resultado;
      });
    });
  }

}
