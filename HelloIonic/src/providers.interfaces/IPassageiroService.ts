import { PassageiroModel } from "../models/PassageiroModel";
import { Observable } from "rxjs/Observable";

export interface IPassageiroService{
    listarPassageiros(): Observable<PassageiroModel[]>;
    atualizarPassageiro(passageiroModel: PassageiroModel): Observable<string>;
    inserirPassageiro(passageiroModel: PassageiroModel): Observable<string>;
    deletarPassageiro(passageiroModel: PassageiroModel): Observable<string>;   
}