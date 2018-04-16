import { PassageiroModel } from "./PassageiroModel";
import { LocalModel } from "./LocalModel";
import { DiaSemanLocalModel } from "./DiaSemanaLocalModel";

export class LocalPassageiroModel{
    codigoLocal: number;
    local: LocalModel;
    codigoTipoLocal: number;
    codigoPassageiro: number;
    passageiro: PassageiroModel;
    diasSemana: DiaSemanLocalModel[];
}