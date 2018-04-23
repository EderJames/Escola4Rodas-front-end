import { VeiculoModel } from "../models/VeiculoModel";
import { Observable } from "rxjs/Observable";

export interface IVeiculoService{
    listarVeiculos(): Observable<VeiculoModel[]>;   
}