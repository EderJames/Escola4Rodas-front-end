import { DiaSemanLocalModel } from "./DiaSemanaLocalModel";
import { DiaSemanaViagemModel } from "./DiaSemanaViagemModel";

export class DiaSemanaModel{
    codigo: number;
    diaSemana: string;
    diaSemanaLocal: DiaSemanLocalModel;
    diaSemanaViagem: DiaSemanaViagemModel;
}