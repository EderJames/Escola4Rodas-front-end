import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILocalInstituicaoService } from '../../providers.interfaces/ILocalInstituicaoService';
import { LocalInstituicaoModel } from '../../models/LocalInstituicaoModel';

/*
  Generated class for the LocalInstituicaoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LocalInstituicaoServiceProvider implements ILocalInstituicaoService {

  constructor(public http: HttpClient) {
    console.log('Hello LocalInstituicaoServiceProvider Provider');
  }

  listarLocaisInstituicao(): Observable<LocalInstituicaoModel[]> {
    throw new Error("Method not implemented.");
  }

  atualizarLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string> {
    throw new Error("Method not implemented.");
  }

  inserirLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string> {
    throw new Error("Method not implemented.");
  }
  
  deletarLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string> {
    throw new Error("Method not implemented.");
  }
  

  
}
