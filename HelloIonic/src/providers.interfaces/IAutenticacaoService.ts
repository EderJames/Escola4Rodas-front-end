import {LoginModel} from '../models/LoginModel';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { UsuarioModel } from '../models/UsuarioModel';

export interface IAutenticacaoService{
    login(loginModel : LoginModel): Observable<UsuarioModel>;
    obterToken(loginModel : LoginModel): Observable<void>;
    logout(): void;
}