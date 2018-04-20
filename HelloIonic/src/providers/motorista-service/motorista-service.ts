import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { MotoristaModel } from '../../models/MotoristaModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { IMotoristaService } from '../../providers.interfaces/IMotoristaService';

/*
  Generated class for the MotoristaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MotoristaServiceProvider implements IMotoristaService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello MotoristaServiceProvider Provider');
  }

  listarMotoristas(): Observable<MotoristaModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL_4_RODAS + '/' + HelloIonicConstants.Motorista.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       let resultado: MotoristaModel[] = resp.data.motorista.map(function (motorista, index, arr){
          let m : MotoristaModel = new MotoristaModel();
          m.codigoUsuario = motorista.Codigo_Usuario;
          m.cnh = motorista.Cnh;
          m.usuario = motorista.Usuario;
          m.viagens = motorista.Viagens;
          m.instituicoes = motorista.Instituicoes;
          m.passageiros = motorista.Passageiros;
          m.veiculos = motorista.Veiculos;
          return m;
       });

       return resultado;
      });
    });
  }
}
