import { LocalInstituicaoModel } from "./LocalInstituicaoModel";
import { MotoristaModel } from "./MotoristaModel";
import { PassageiroInstituicaoModel } from "./PassageiroInstituicaoModel";

export class InstituicaoModel{
    codigoInstituicao : number;
    nome: string;
    codigoLocal: number;
    dthr: Date;
    localInstituicao: LocalInstituicaoModel;
    passageiroInstituicao: PassageiroInstituicaoModel[];
    motoristas: MotoristaModel[];

}