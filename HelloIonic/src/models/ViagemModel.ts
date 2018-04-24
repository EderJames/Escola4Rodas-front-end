import { DiaSemanaViagemModel } from "./DiaSemanaViagemModel";
import { InstituicaoModel } from "./InstituicaoModel";
import { PassageiroModel } from "./PassageiroModel";

export class ViagemModel{
    Codigo: number;
    Nome: string;
    Codigo_Veiculo: number;
    Codigo_Rota: number;
    Data_Inicio: Date;
    Dthr: Date;
    Instituicoes: InstituicaoModel;
    VeiculoViagem: string;
    RotaViagem: string;
    Passageiros: PassageiroModel[];
    tipoViagem: number;
    codigoDiaSemana: DiaSemanaViagemModel;
    diasSemanaViagem: DiaSemanaViagemModel[];
}