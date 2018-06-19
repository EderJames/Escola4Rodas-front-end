import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IDiaSemanaService } from '../../providers.interfaces/IDiaSemanaService';
import { Observable } from 'rxjs/Observable';
import { DiaSemanaModel } from '../../models/DiaSemanaModel';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';

/*
  Generated class for the DiaSemanaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiaSemanaServiceProvider implements IDiaSemanaService {

  
  constructor(public http: Http, private nativeStorage: NativeStorage) {
    console.log('Hello MotoristaServiceProvider Provider');
  }

  listarDiaSemana(): Observable<DiaSemanaModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.DiaSemana.GET, {
        headers: headers
      }).map(response => {
        let resp = response.json();
        let resultado: DiaSemanaModel[] = resp.map(function (diaSemana, index, arr) {
          let diaSemanaModel: DiaSemanaModel = new DiaSemanaModel();
          diaSemanaModel.codigo = diaSemana.Codigo;
          diaSemanaModel.diaSemana = diaSemana.Dia_Semana;
          diaSemanaModel.diaSemanaLocal = diaSemana.Locais;
          //diaSemanaModel.diaSemanaViagem
          
          return diaSemanaModel;
        });

        return resultado;
      });
    });
  }

}
