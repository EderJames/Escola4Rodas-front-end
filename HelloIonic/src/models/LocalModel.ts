import { LocalPassageiroModel } from "./LocalPassageiroModel";
import { LocalInstituicaoModel } from "./LocalInstituicaoModel";

export class LocalModel{
    codigo : number;
    latitude: number;
    longitude: string;
    nomeLocal: string;
    bairro: string;
    nomeRua: string;
    numero: number;
    localPassageiro: LocalPassageiroModel;
    localInstituicao: LocalInstituicaoModel;
    dthr: Date;
}