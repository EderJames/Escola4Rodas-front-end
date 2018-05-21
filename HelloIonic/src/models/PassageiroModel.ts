import { MotoristaModel } from "./MotoristaModel";
import { PagametoModel } from "./PagamentoModel";
import { LocalPassageiroModel } from "./LocalPassageiroModel";
import { ViagemModel } from "./ViagemModel";
import { InstituicaoModel } from "./InstituicaoModel";
import { UsuarioModel } from "./UsuarioModel";

export class PassageiroModel{
    tipoViagem: number;
    codigoFormaPagamento: number;
    tipoPassageiro: number;
    codigoMotorista: number;
    codigoUsuario : number;
    
    instituicoes: InstituicaoModel[];
    motorista: MotoristaModel;
    pagamentos: PagametoModel[];
    rotas: string[];
    locaisPassageiro: LocalPassageiroModel[];
    viagens: ViagemModel[];
    usuario: UsuarioModel;
    dthr: number;
}