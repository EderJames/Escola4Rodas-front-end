import { Observable } from "rxjs/Observable";
import { DiaSemanaModel } from "../models/DiaSemanaModel";

export interface IDiaSemanaService {
    listarDiaSemana(): Observable<DiaSemanaModel[]>;
}