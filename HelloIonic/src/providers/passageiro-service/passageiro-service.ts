import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IPassageiroService } from '../../providers.interfaces/IPassageiroService';
import { PassageiroModel } from '../../models/PassageiroModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { LocalPassageiroModel } from '../../models/LocalPassageiroModel';
import { LocalModel } from '../../models/LocalModel';
import { PassageiroInstituicaoModel } from '../../models/PassageiroInstituicaoModel';
import { InstituicaoModel } from '../../models/InstituicaoModel';

@Injectable()
export class PassageiroServiceProvider implements IPassageiroService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello PassageiroServiceProvider Provider');
  }
  
  atualizarPassageiro(passageiroModel: PassageiroModel): Observable<string> {
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
      debugger
      headers.append('Content-type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);

      return this.http.put(HelloIonicConstants.BASE_URL + HelloIonicConstants.Passageiro.PUT,
        JSON.stringify(passageiroModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });
    });
  }

  inserirPassageiro(passageiroModel: PassageiroModel): Observable<string> {
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

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.Passageiro.POST,
        JSON.stringify(passageiroModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();//response.json();
        });
    });
  }

  deletarPassageiro(passageiroModel: PassageiroModel): Observable<string> {
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

      return this.http.delete(HelloIonicConstants.BASE_URL + HelloIonicConstants.Passageiro.DELETE + "/" + passageiroModel.Codigo_Usuario,
         { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }

  listarPassageiros(): Observable<PassageiroModel[]> {
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
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');

      //caminho da url da minha webapi - instituicoes/get
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.Passageiro.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       let resultado: PassageiroModel[] = resp.map(function (passageiro, index, arr){
          let p : PassageiroModel = new PassageiroModel();
          
          p.tipoViagem = passageiro.Tipo_Viagem;
          p.codigoFormaPagamento = passageiro.Codigo_Forma_Pagamento;
          p.tipoPassageiro = passageiro.Tipo_Passageiro;
          p.Codigo_Usuario = passageiro.Codigo_Usuario;
          p.dthr = passageiro.Dthr;
          p.codigoMotorista = passageiro.Codigo_Motorista;
          p.motorista = passageiro.Motorista;
          p.usuario = passageiro.Usuario;
          p.pagamentos = passageiro.Pagamentos;
          p.rotas = passageiro.Rotas;
          
          p.locaisPassageiro = new Array<LocalPassageiroModel>();
          let localPassageiro : LocalPassageiroModel;
          
          for(let i: number = 0; i < passageiro.LocaisPassageiro.length; i++){
            localPassageiro = new LocalPassageiroModel();
            localPassageiro.Codigo_Local = passageiro.LocaisPassageiro[i].Codigo_Local;
            localPassageiro.Codigo_Passageiro = passageiro.LocaisPassageiro[i].Codigo_Passageiro;
            localPassageiro.Codigo_Tipo_Local = passageiro.LocaisPassageiro[i].Codigo_Tipo_Local;
            localPassageiro.Local = new LocalModel();
            localPassageiro.Local.codigo = passageiro.LocaisPassageiro[i].Local.Codigo;
            localPassageiro.Local.bairro = passageiro.LocaisPassageiro[i].Local.Bairro;
            localPassageiro.Local.dthr = passageiro.LocaisPassageiro[i].Local.Dthr;
            localPassageiro.Local.latitude = passageiro.LocaisPassageiro[i].Local.Latitude;
            localPassageiro.Local.longitude = passageiro.LocaisPassageiro[i].Local.Longitude;
            localPassageiro.Local.nomeLocal = passageiro.LocaisPassageiro[i].Local.Nome_Local;
            localPassageiro.Local.nomeRua = passageiro.LocaisPassageiro[i].Local.Nome_Rua;
            localPassageiro.Local.numero = passageiro.LocaisPassageiro[i].Local.Numero;
            p.locaisPassageiro.push(localPassageiro);
          }
          
          debugger
          let objPassageiroInstituicaoModel: PassageiroInstituicaoModel;
          p.passageiroInstituicao = new Array<PassageiroInstituicaoModel>();
          for(let i:number = 0; i < passageiro.PassageiroInstituicao.length; i++){
            objPassageiroInstituicaoModel = new PassageiroInstituicaoModel();

            objPassageiroInstituicaoModel.Codigo_Instituicao = passageiro.PassageiroInstituicao[i].Codigo_Instituicao;
            objPassageiroInstituicaoModel.Codigo_Passageiro = passageiro.PassageiroInstituicao[i].Codigo_Passageiro;
            objPassageiroInstituicaoModel.Codigo_Tipo_Passageiro = passageiro.PassageiroInstituicao[i].Codigo_Tipo_Passageiro;
            objPassageiroInstituicaoModel.passageiro = passageiro.PassageiroInstituicao[i].Passageiro;

            objPassageiroInstituicaoModel.instituicao = new InstituicaoModel();
            objPassageiroInstituicaoModel.instituicao.Codigo_Instituicao = passageiro.PassageiroInstituicao[i].Instituicao.Codigo_Instituicao;
            objPassageiroInstituicaoModel.instituicao.nome = passageiro.PassageiroInstituicao[i].Instituicao.Nome;
            
            
            p.passageiroInstituicao.push(objPassageiroInstituicaoModel);
          }
          
          p.viagens = passageiro.Viagens;

          return p;
       });

       return resultado;
      });
    });
  }

}
