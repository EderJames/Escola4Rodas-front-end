import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocalService } from '../../providers.interfaces/ILocalService';
import { LocalModel } from '../../models/LocalModel';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the LocalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalServiceProvider implements ILocalService {

  constructor(public http: HttpClient) {
    console.log('Hello LocalServiceProvider Provider');
  }

  listarLocal(): Observable<LocalModel[]> {
    throw new Error("Method not implemented.");
  }
  inserirLocal(localModel: LocalModel): Observable<string> {
    throw new Error("Method not implemented.");
  }
  atualizarLocal(localModel: LocalModel): Observable<string> {
    throw new Error("Method not implemented.");
  }
  deletarLocal(localModel: LocalModel): Observable<string> {
    throw new Error("Method not implemented.");
  }
  

}
