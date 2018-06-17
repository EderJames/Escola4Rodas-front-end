import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { MotoristaModel } from '../../models/MotoristaModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { IMotoristaService } from '../../providers.interfaces/IMotoristaService';

@Injectable()
export class MotoristaServiceProvider implements IMotoristaService {

  constructor(public http: Http, private nativeStorage: NativeStorage) {
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
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Motorista.GET, {
        headers: headers
      }).map(response => {
        let resp = response.json();
        let resultado: MotoristaModel[] = resp.map(function (motorista, index, arr) {
          let m: MotoristaModel = new MotoristaModel();
          m.Usuario = motorista.Usuario;
          m.Codigo_Usuario = motorista.Codigo_Usuario;
          m.Cnh = motorista.Cnh;
          m.Viagens = motorista.Viagens;
          m.Instituicoes = motorista.Instituicoes;
          m.Passageiros = motorista.Passageiros;
          m.Veiculos = motorista.Veiculos;
          return m;
        });

        return resultado;
      });
    });
  }

  inserirMotorista(motoristaModel: MotoristaModel): Observable<string> {
    debugger

    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
        .then(
          data => { return data.token },
          err => { return null }
        )
    );
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);

      headers.append('Content-type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.Motorista.POST,
        JSON.stringify(motoristaModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();//response.json();
        });

    });
  }
  atualizarMotorista(motoristaModel: MotoristaModel): Observable<string> {
    debugger
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

      return this.http.put(HelloIonicConstants.BASE_URL + HelloIonicConstants.Motorista.PUT,
        JSON.stringify(motoristaModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }

  deletarMotorista(motoristaModel: MotoristaModel): Observable<string> {
    debugger
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
        .then(
          data => { return data.token },
          err => { return null }
        )
    );
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);

      headers.append('Content-type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);

      return this.http.delete(HelloIonicConstants.BASE_URL + HelloIonicConstants.Motorista.DELETE + "/" + motoristaModel.Codigo_Usuario,
        { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }
}
