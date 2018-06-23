import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ViagemModel } from '../../models/ViagemModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IViagemService } from '../../providers.interfaces/IViagemService';

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

          return v;
       });

       return resultado;
      });
    });
  }

  inserirViagem(viagemModel: ViagemModel): Observable<void> {
    
    let corpoRequisicao = {
      codigoDiaSemana: viagemModel.codigoDiaSemana,
      codigoVeiculo: viagemModel.Codigo_Veiculo,
      dataInicio: viagemModel.Data_Inicio,
      nome: viagemModel.Nome,
      passageiros: viagemModel.Passageiros,
      tipoViagem: viagemModel.tipoViagem,
      veiculo: viagemModel.VeiculoViagem
    }

    return this.http.post(HelloIonicConstants.BASE_URL_PROXY_4RODAS  + HelloIonicConstants.Viagem.POST, corpoRequisicao)
      .map(response => {
        let resp = response.json();
        
      });
    
  }

}
