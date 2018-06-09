import { InstituicaoModel } from "./InstituicaoModel";
import { PassageiroModel } from "./PassageiroModel";
import { VeiculoModel } from "./VeiculoModel";
import { ViagemModel } from "./ViagemModel";
import { UsuarioModel } from "./UsuarioModel";

export class MotoristaModel{
    Id: number;
    Usuario: UsuarioModel;
    Codigo_Usuario: number;
    Cnh: number;
    Viagens: ViagemModel[];
    Instituicoes: InstituicaoModel[];
    Passageiros: PassageiroModel[];
    Veiculos: VeiculoModel[];
}