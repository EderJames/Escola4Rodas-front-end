import { InstituicaoModel } from "../models/InstituicaoModel";
import { Observable } from "rxjs/Observable";

export interface IInstituicaoService{
    listarInstituicoes(): Observable<InstituicaoModel[]>;
}