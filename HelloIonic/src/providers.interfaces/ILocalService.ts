import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { LocalModel } from '../models/LocalModel';

export interface ILocalService{
    listarLocal(): Observable<LocalModel[]>;
    inserirLocal(localModel : LocalModel): Observable<string>;
    atualizarLocal(localModel : LocalModel): Observable<string>;
    deletarLocal(localModel : LocalModel): Observable<string>;
}