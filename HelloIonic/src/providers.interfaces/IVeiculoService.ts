import { VeiculoModel } from "../models/VeiculoModel";
import { Observable } from "rxjs/Observable";

export interface IVeiculoService{
    listarVeiculos(): Observable<VeiculoModel[]>;   
    atualizarVeiculo(veiculoModel: VeiculoModel): Observable<string>;
    inserirVeiculo(veiculoModel: VeiculoModel): Observable<string>;
}