import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { VeiculoModel } from '../../models/VeiculoModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IVeiculoService } from '../../providers.interfaces/IVeiculoService';
import { UsuarioModel } from '../../models/UsuarioModel';

/*
  Generated class for the VeiculoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeiculoServiceProvider implements IVeiculoService {

  constructor(public http: Http, private nativeStorage: NativeStorage) {
    console.log('Hello VeiculoServiceProvider Provider');
  }

  listarVeiculos(): Observable<VeiculoModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Veiculo.GET, {
        headers: headers
      }).map(response => {

        let resp = response.json();
        let resultado: VeiculoModel[] = resp.map(function (veiculo, index, arr) {

          debugger;
          let v: VeiculoModel = new VeiculoModel();
          if (veiculo && veiculo.Motorista) {
            v.Codigo_Veiculo = veiculo.Codigo_Veiculo;
            v.Nome = veiculo.Nome;
            v.Placa = veiculo.Placa;
            v.Carga_Maxima = veiculo.Carga_Maxima;
            v.Codigo_Motorista = veiculo.Codigo_Motorista;
            v.Dthr = veiculo.Dthr;
            v.Motorista = veiculo.Motorista;
            v.Documentos = veiculo.Documentos;
            v.Viagens = veiculo.Viagens;
            return v;
          }
        });
        return resultado;
      });
    });
  }

  buscarPorCodigo(codigo: number): Observable<VeiculoModel> {
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

      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Veiculo.GET + "/" + codigo, {
        headers: headers
      }).map(response => {
        let resp = response.json();

        let resultado: VeiculoModel = resp.map(function (veiculo) {
          let v: VeiculoModel = new VeiculoModel();
          v.Codigo_Veiculo = veiculo.Codigo_Veiculo;
          v.Nome = veiculo.Nome;
          v.Placa = veiculo.Placa;
          v.Carga_Maxima = veiculo.Carga_Maxima;
          v.Carga_Maxima = veiculo.Codigo_Motorista;
          v.Dthr = veiculo.Dthr;
          v.Motorista = veiculo.Motorista;
          v.Documentos = veiculo.Documentos;
          v.Viagens = veiculo.Viagens;

          return v;
        });

        return resultado;
      });
    });
  }

  atualizarVeiculo(veiculoModel: VeiculoModel): Observable<string> {
    debugger
    veiculoModel.Codigo_Motorista = veiculoModel.Motorista.Codigo_Usuario;
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

      return this.http.put(HelloIonicConstants.BASE_URL + HelloIonicConstants.Veiculo.POST,
        JSON.stringify(veiculoModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }

  inserirVeiculo(veiculoModel: VeiculoModel): Observable<string> {
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

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.Veiculo.POST,
        JSON.stringify(veiculoModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();//response.json();
        });

    });
  }

  deletarVeiculo(veiculoModel: VeiculoModel): Observable<string> {
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

      return this.http.delete(HelloIonicConstants.BASE_URL + HelloIonicConstants.Veiculo.DELETE + "/" + veiculoModel.Codigo_Veiculo,
         { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }
}
