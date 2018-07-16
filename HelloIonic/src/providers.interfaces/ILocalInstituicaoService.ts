import { Observable } from "rxjs/Observable";
import { LocalInstituicaoModel } from "../models/LocalInstituicaoModel";

export interface ILocalInstituicaoService{
    listarLocaisInstituicao(): Observable<LocalInstituicaoModel[]>;
    atualizarLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string>;
    inserirLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string>;
    deletarLocalInstituicao(localInstituicao: LocalInstituicaoModel): Observable<string>
}