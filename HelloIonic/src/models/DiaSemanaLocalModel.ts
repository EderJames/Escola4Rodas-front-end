import { LocalPassageiroModel } from "./LocalPassageiroModel";
import { DiaSemanaModel } from "./DiaSemanaModel";

export class DiaSemanLocalModel{
    codigo: number;
    diaSemana: DiaSemanaModel;
    diaSemanaLocais: LocalPassageiroModel[];
}