import { DiaSemanaViagemModel } from "./DiaSemanaViagemModel";
import { InstituicaoModel } from "./InstituicaoModel";
import { PassageiroModel } from "./PassageiroModel";

export class ViagemModel{
    codigo: number;
    nome: string;
    codigoVeiculo: number;
    dataInicio: Date;
    tipoViagem: number;
    codigoDiaSemana: DiaSemanaViagemModel;
    instituicoes: InstituicaoModel;
    veiculo: string;
    passageiros: PassageiroModel[];
    diasSemanaViagem: DiaSemanaViagemModel[];


}