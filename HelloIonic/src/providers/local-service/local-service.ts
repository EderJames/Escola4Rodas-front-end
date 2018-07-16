import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ILocalService } from '../../providers.interfaces/ILocalService';
import { LocalModel } from '../../models/LocalModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';

/*
  Generated class for the LocalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalServiceProvider implements ILocalService {

  constructor(public http: Http, private nativeStorage: NativeStorage) {
    console.log('Hello LocalServiceProvider Provider');
  }

  listarLocal(): Observable<LocalModel[]> {
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

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Local.GET, {
        headers: headers
      }).map(response => {

        let resp = response.json();
        let resultado: LocalModel[] = resp.map(function (local, index, arr) {

          debugger;
          let l: LocalModel = new LocalModel();
          
            l.codigo = local.codigo;
            l.bairro = local.Nome;
            l.dthr = local.Placa;
            l.latitude = local.Carga_Maxima;
            l.longitude = local.Codigo_Motorista;
            l.nomeLocal = local.Dthr;
            l.nomeRua = local.Motorista;
            l.numero = local.Documentos;
            return l;
          
        });
        return resultado;
      });
    });
  }

  inserirLocal(localModel: LocalModel): Observable<string> {
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

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.Local.POST,
        JSON.stringify(localModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();//response.json();
        });

    });
  }
  atualizarLocal(localModel: LocalModel): Observable<string> {
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

      return this.http.put(HelloIonicConstants.BASE_URL + HelloIonicConstants.LocalPassageiro.PUT,
        JSON.stringify(localModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }

  deletarLocal(localModel: LocalModel): Observable<string> {
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

      return this.http.delete(HelloIonicConstants.BASE_URL + HelloIonicConstants.Local.DELETE + "/" + localModel.codigo,
         { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });
    });
  }

}
