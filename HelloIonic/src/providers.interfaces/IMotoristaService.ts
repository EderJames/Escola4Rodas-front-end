import {MotoristaModel} from '../models/MotoristaModel';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

export interface IMotoristaService{
    listarMotoristas(): Observable<MotoristaModel[]>;
}