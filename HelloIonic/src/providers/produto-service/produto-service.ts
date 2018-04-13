import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { IProdutoService } from '../../providers.interfaces/IProdutoService';
import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import { ProdutoModel } from '../../models/ProdutoModel';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { HelloIonicConstants } from '../../app/HelloIonicConstants';


@Injectable()
export class ProdutoServiceProvider implements IProdutoService {

  constructor(public http: Http, private nativeStorage : NativeStorage) {
    console.log('Hello ProdutoServiceProvider Provider');
  }

  listarProdutos(): Observable<ProdutoModel[]> {
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

      return this.http.get(HelloIonicConstants.BASE_URL + '/' + HelloIonicConstants.Produtos.GET, {
       headers: headers
      }).map(response => {
        let resp = response.json();
        let resultado: ProdutoModel[] = resp.data.produtos.map(function (produto, index, arr){
          let p: ProdutoModel = new ProdutoModel();
          p.id = produto.id;
          p.categoria = produto.categoria;
          p.descricao = produto.descricao;
          p.nome = produto.nome;
          p.icone =produto.categoria == 'doce' ? 'alert' : 'basket';
          return p;
        });
        
        return resultado;
      });
    });
  }
}
