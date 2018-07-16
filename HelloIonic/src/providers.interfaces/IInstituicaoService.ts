import { InstituicaoModel } from "../models/InstituicaoModel";
import { Observable } from "rxjs/Observable";

export interface IInstituicaoService{
    listarInstituicoes(): Observable<InstituicaoModel[]>;
    atualizarInstituicao(instituicaoModel: InstituicaoModel): Observable<string>;
    inserirInstituicao(instituicaoModel: InstituicaoModel): Observable<string>;
    deletarInstituicao(instituicaoModel: InstituicaoModel): Observable<string>
}