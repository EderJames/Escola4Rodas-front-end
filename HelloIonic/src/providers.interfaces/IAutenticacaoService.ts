import {LoginModel} from '../models/LoginModel';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

export interface IAutenticacaoService{
    login(loginModel : LoginModel): Observable<void>;
    logout(): void;
}