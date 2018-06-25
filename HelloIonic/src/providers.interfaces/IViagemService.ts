import { ViagemModel } from "../models/ViagemModel";
import { Observable } from "rxjs/Observable";

export interface IViagemService{
    listarViagens(): Observable<ViagemModel[]>;
    atualizarViagem(viagemModel: ViagemModel): Observable<string>;
    inserirViagem(viagemModel: ViagemModel): Observable<string>;
    deletarViagem(viagemModel: ViagemModel): Observable<string>;
}