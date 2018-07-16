import { PassageiroModel } from "./PassageiroModel";
import { InstituicaoModel } from "./InstituicaoModel";

export class PassageiroInstituicaoModel{
    Codigo_Passageiro: number;
    Codigo_Instituicao: number;
    Codigo_Tipo_Passageiro: number;
    passageiro: PassageiroModel;
    instituicao: InstituicaoModel;
}