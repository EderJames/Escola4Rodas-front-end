import { InstituicaoModel } from "./InstituicaoModel";
import { PassageiroModel } from "./PassageiroModel";
import { VeiculoModel } from "./VeiculoModel";
import { ViagemModel } from "./ViagemModel";
import { UsuarioModel } from "./UsuarioModel";

export class MotoristaModel{
    usuario: UsuarioModel;
    codigoUsuario: number;
    cnh: number;
    viagens: ViagemModel[];
    instituicoes: InstituicaoModel[];
    passageiros: PassageiroModel[];
    veiculos: VeiculoModel[];
}