import { PassageiroModel } from "./PassageiroModel";
import { LocalModel } from "./LocalModel";
import { DiaSemanLocalModel } from "./DiaSemanaLocalModel";

export class LocalPassageiroModel{
    Codigo_Local: number;
    Local: LocalModel;
    Codigo_Tipo_Local: number;
    Codigo_Passageiro: number;
    Passageiro: PassageiroModel;
    DiaSemanaLocal: DiaSemanLocalModel[];
}