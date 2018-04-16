import { DiaSemanLocalaModel } from "./DiaSemanaLocalModel";
import { DiaSemanaViagemModel } from "./DiaSemanaViagemModel";

export class DiaSemanaModel{
    codigo: number;
    diaSemana: string;
    diaSemanaLocal: DiaSemanLocalaModel;
    diaSemanaViagem: DiaSemanaViagemModel;
}