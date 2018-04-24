import { LocalInstituicaoModel } from "./LocalInstituicaoModel";
import { MotoristaModel } from "./MotoristaModel";
import { PassageiroInstituicaoModel } from "./PassageiroInstituicaoModel";
import { ViagemModel } from "./ViagemModel";

export class InstituicaoModel{
    Codigo : number;
    nome: string;
    codigoLocal: number;
    dthr: Date;
    localInstituicao: LocalInstituicaoModel;
    passageiroInstituicao: PassageiroInstituicaoModel[];
    motoristas: MotoristaModel[];
    Viagens: ViagemModel[];

}