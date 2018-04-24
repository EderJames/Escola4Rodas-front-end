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
          v.codigoVeiculo = veiculo.Codigo_Veiculo;
          v.nome = veiculo.Nome;
          v.nome = veiculo.Placa;
          v.nome = veiculo.Carga_Maxima;
          v.codigoMotorista = veiculo.Codigo_Motorista;
          v.dthr = veiculo.Dthr;
          v.motorista = veiculo.Motorista;
          v.documentos = veiculo.Documentos;
          v.viagens = veiculo.Viagens;
          
          return v;
       });

       return resultado;
      });
    });
  }

  inserirVeiculo(veiculoModel: VeiculoModel): Observable<void> {
    
    let corpoRequisicao = {
      codigoMotorista: veiculoModel.codigoMotorista,
      cargaMaxima: veiculoModel.cargaMaxima,
      //dataInicio: veiculoModel.documentos,
      dthr: veiculoModel.dthr,
      nome: veiculoModel.nome,
      placa: veiculoModel.placa,
      //veiculo: viagemModel.veiculo
    }

    return this.http.post(HelloIonicConstants.BASE_URL_PROXY_4RODAS  + HelloIonicConstants.Veiculo.POST, corpoRequisicao)
      .map(response => {
        let resp = response.json();
        
      });
  }
}
