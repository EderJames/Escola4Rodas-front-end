import { InstituicaoModel } from "./InstituicaoModel";
import { PassageiroModel } from "./PassageiroModel";
import { VeiculoModel } from "./VeiculoModel";
import { ViagemModel } from "./ViagemModel";

export class MotoristaModel{
    usuario: string;
    codigoUsuario: number;
    cnh: number;
    viagens: ViagemModel[];
    instituicoes: InstituicaoModel[];
    passageiros: PassageiroModel[];
    veiculos: VeiculoModel[];
}