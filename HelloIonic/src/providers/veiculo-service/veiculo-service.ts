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
      headers.set('Authorization',  `Bearer ${token}`);

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Veiculo.GET, {
        headers : headers
      }).map(response => {
        
       let resp = response.json();
       let resultado: VeiculoModel[] = resp.map(function (veiculo, index, arr){
          
       
       alert(JSON.stringify(veiculo.Motorista.Usuario));
        let v : VeiculoModel = new VeiculoModel();
          v.codigoVeiculo = veiculo.Codigo_Veiculo;
          v.nome = veiculo.Nome;
          v.placa = veiculo.Placa;
          v.cargaMaxima = veiculo.Carga_Maxima;
          v.codigoMotorista = veiculo.Codigo_Motorista;
          v.dthr = veiculo.Dthr;
          v.motorista = veiculo.Motorista;
          //não está setando o motorista v.motorista.usuario = new UsuarioModel();
          
          let usuario : UsuarioModel;
          usuario = new  UsuarioModel();

          usuario.Codigo = veiculo.Motorista.Usuario.Codigo;
          usuario.Nome = veiculo.Motorista.Usuario.Nome;
          usuario.Idade = veiculo.Motorista.Usuario.Idade;
          usuario.Telefone = veiculo.Motorista.Usuario.Telefone;
          usuario.Login = veiculo.Motorista.Usuario.Login;
          usuario.Senha = "";
          usuario.Email = veiculo.Motorista.Usuario.Email;
          usuario.Dthr = veiculo.Motorista.Usuario.Dthr;
          v.documentos = veiculo.Documentos;
          v.viagens = veiculo.Viagens;
          return v;
       });

       return resultado;
      });
    });
  }

  buscarPorCodigo(codigo: number): Observable<VeiculoModel> {
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

      return this.http.get(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Veiculo.GET + "/" + codigo, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       
       let resultado: VeiculoModel = resp.map(function (veiculo){
          let v : VeiculoModel = new VeiculoModel();
          v.codigoVeiculo = veiculo.Codigo_Veiculo;
          v.nome = veiculo.Nome;
          v.placa = veiculo.Placa;
          v.cargaMaxima = veiculo.Carga_Maxima;
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

    return this.http.post(HelloIonicConstants.BASE_URL  + HelloIonicConstants.Veiculo.POST, corpoRequisicao)
      .map(response => {
        let resp = response.json();
        
      });
  }
}
