import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ViagemModel } from '../../models/ViagemModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IViagemService } from '../../providers.interfaces/IViagemService';
import { DiaSemanaModel } from '../../models/DiaSemanaModel';
import { Header } from 'ionic-angular';

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
      headers.set('Authorization',  `Bearer ${token}`);

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Viagem.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       debugger;
       let resultado: ViagemModel[] = resp.map(function (viagem, index, arr){
          let v : ViagemModel = new ViagemModel();
          debugger
          v.Codigo = viagem.Codigo;
          v.Nome = viagem.Nome;
          v.Codigo_Veiculo = viagem.Codigo_Veiculo;
          v.Codigo_Rota = viagem.Codigo_Rota;
          v.Data_Inicio = viagem.Data_Inicio;
          v.Dthr = viagem.Dthr;
          v.Instituicoes = viagem.Instituicoes;
          v.VeiculoViagem = viagem.VeiculoViagem;
          v.RotaViagem = viagem.RotaViagem;
          v.Passageiros = viagem.Passageiros;
          v.tipoViagem = viagem.Tipo_Viagem;
          v.diasSemanaViagem = viagem.DiaSemanaViagem;
          for(let i: number = 0; i < viagem.DiaSemanaViagem.length; i++){
            v.diasSemanaViagem[i].codigo = viagem.DiaSemanaViagem[i].Codigo;
            v.diasSemanaViagem[i].diaSemana = new DiaSemanaModel();// = viagem.DiaSemanaViagem[i].DiaSemana;
            v.diasSemanaViagem[i].diaSemana.codigo = viagem.DiaSemanaViagem[i].DiaSemana.Codigo;
            v.diasSemanaViagem[i].diaSemana.diaSemana = viagem.DiaSemanaViagem[i].DiaSemana.Dia_Semana;
          }
          return v;
       });

       return resultado;
      });
    });
  }

  inserirViagem(viagemModel: ViagemModel): Observable<string> {
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
      .then(data => {return data.token}, err => {return null})
    );
    
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-type', 'application/json');

      return this.http.post(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Viagem.POST, JSON.stringify(viagemModel), { headers: headers })
      .map(response => {
        let resp = response.json();
        return "";
      }, 
      err=>{
        return "";
      });
    });
  }

  atualizarViagem(viagemModel: ViagemModel): Observable<string>{
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
      .then(data => {return data.token}, err => {return null})
    );
    
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-type', 'application/json');

      return this.http.put(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Viagem.PUT, JSON.stringify(viagemModel), { headers: headers })
      .map(response => {
        let resp = response.json();
        return "";
      }, 
      err=>{
        return "";
      });
    });
  }

  deletarViagem(viagemModel: ViagemModel): Observable<string>{
    let tokenObservable = Observable.fromPromise(
      this.nativeStorage.getItem('token_autenticacao')
      .then(data => {return data.token}, err => {return null})
    );
    
    return tokenObservable.flatMap(token => {
      let headers: Headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-type', 'application/json');

      return this.http.delete(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Viagem.DELETE + "/" + viagemModel.Codigo, { headers: headers })
      .map(response => {
        let resp = response.json();
        return "";
      }, 
      err=>{
        return "";
      });
    });
  }
}
