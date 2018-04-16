import { PassageiroModel } from "./PassageiroModel";
import { InstituicaoModel } from "./InstituicaoModel";

export class PassageiroInstituicaoModel{
    codigoPassageiro: number;
    codigoInstituicao: number;
    codigoTipoPassageiro: number;
    passageiro: PassageiroModel;
    instituicao: InstituicaoModel;
}