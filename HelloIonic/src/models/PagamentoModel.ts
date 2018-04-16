import { PassageiroModel } from "./PassageiroModel";

export class PagametoModel{
    codigo : number;
    descricao: string;
    datetime: Date;
    codigoPassageiro: number;
    mes: number;
    ano: number;
    Dia: number;

    passageiro: PassageiroModel;
}