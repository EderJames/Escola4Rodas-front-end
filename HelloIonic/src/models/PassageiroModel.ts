import { MotoristaModel } from "./MotoristaModel";
import { PagametoModel } from "./PagamentoModel";
import { LocalPassageiroModel } from "./LocalPassageiroModel";
import { ViagemModel } from "./ViagemModel";
import { InstituicaoModel } from "./InstituicaoModel";

export class PassageiroModel{
    tipoViagem: number;
    codigoFormaPagamento: number;
    tipoPassageiro: number;
    codigoMotorista: number;
    codigoUsuario : number;
    
    instituicoes: InstituicaoModel[];
    motorista: MotoristaModel;
    usuario : string;
    pagamentos: PagametoModel[];
    rotas: string[];
    locaisPassageiro: LocalPassageiroModel[];
    viagens: ViagemModel[];
    
    dthr: number;
}