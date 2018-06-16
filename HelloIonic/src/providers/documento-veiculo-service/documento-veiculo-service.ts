import { Http, Headers } from '@angular/http';
import { ViagemModel } from '../../models/ViagemModel';
import { Observable } from 'rxjs/Observable';
import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';
import { IDocumentoService } from '../../providers.interfaces/IDocumentoService';
import { Injectable } from '@angular/core';
import { DocumentoVeiculoModel } from '../../models/DocumentoVeiculoModel';
/*
  Generated class for the DocumentoVeiculoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DocumentoVeiculoServiceProvider implements IDocumentoService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello ViagemServiceProvider Provider');
  }

  listarDocumentosVeiculo(): Observable<DocumentoVeiculoModel[]> {
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
      return this.http.get(HelloIonicConstants.BASE_URL + HelloIonicConstants.DocumentoVeiculo.GET, {
        headers : headers
      }).map(response => {
       let resp = response.json();
       
       let resultado: DocumentoVeiculoModel[] = resp.map(function (documento, index, arr){
          let documentoVeiculoModel : DocumentoVeiculoModel = new DocumentoVeiculoModel();
          documentoVeiculoModel.Codigo = documento.Codigo;
          documentoVeiculoModel.Codigo_Tipo_Documento = documento.TipoDocumento;
          documentoVeiculoModel.Codigo_Veiculo = documento.Codigo_Veiculo;
          documentoVeiculoModel.Descricao = documento.Descricao;
          documentoVeiculoModel.Dthr = documento.Dthr;
          documentoVeiculoModel.Nome_Documento = documento.Nome_Documento;
          documentoVeiculoModel.Validade = documento.Validade;
          documentoVeiculoModel.veiculo = documento.Veiculo;

          return documentoVeiculoModel;
       });

       return resultado;
      });
    });
  }

  atualizarDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string> {
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

      return this.http.put(HelloIonicConstants.BASE_URL + HelloIonicConstants.DocumentoVeiculo.PUT,
        JSON.stringify(documentoVeiculoModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });

    });
  }

  inserirDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string> {
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

      return this.http.post(HelloIonicConstants.BASE_URL + HelloIonicConstants.DocumentoVeiculo.POST,
        JSON.stringify(documentoVeiculoModel), { headers: headers })
        .map(response => {
          debugger;
          return response.toString();//response.json();
        });

    });
  }
  deletarDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string> {
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

      return this.http.delete(HelloIonicConstants.BASE_URL + HelloIonicConstants.DocumentoVeiculo.DELETE + "/" + documentoVeiculoModel.Codigo,
         { headers: headers })
        .map(response => {
          debugger;
          return response.toString();
        });
    });
  }
}