import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { VeiculoModel } from '../../models/VeiculoModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IVeiculoService } from '../../providers.interfaces/IVeiculoService';

/*
  Generated class for the VeiculoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeiculoServiceProvider implements IVeiculoService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello VeiculoServiceProvider Provider');
  }

  listarVeiculos(): Observable<VeiculoModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL_PROXY_4RODAS + HelloIonicConstants.Veiculo.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       alert("" + resp.data);
       let resultado: VeiculoModel[] = resp.map(function (veiculo, index, arr){
          let v : VeiculoModel = new VeiculoModel();
          v.codigoVeiculo = veiculo.codigoVeiculo;
          v.codigoMotorista = veiculo.codigoMotorista;
          
          v.documentos = veiculo.documentos;
          v.dthr = veiculo.dthr;
          v.motorista = veiculo.motorista;
          v.nome = veiculo.nome;
          v.placa = veiculo.placa;
          v.viagens = veiculo.viagens;
          v.cargaMaxima = veiculo.cargaMaxima;

          return v;
       });

       return resultado;
      });
    });
  }
}
