import { ViagemModel } from "../models/ViagemModel";
import { Observable } from "rxjs/Observable";

export interface IViagemService{
    listarViagens(): Observable<ViagemModel[]>;
}