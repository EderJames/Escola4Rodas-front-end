import {MotoristaModel} from '../models/MotoristaModel';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

export interface IMotoristaService{
    listarMotoristas(): Observable<MotoristaModel[]>;
    inserirMotorista(motoristaModel : MotoristaModel): Observable<string>;
    atualizarMotorista(motoristaModel : MotoristaModel): Observable<string>;
    deletarMotorista(motoristaModel : MotoristaModel): Observable<string>;
}