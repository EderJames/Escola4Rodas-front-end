import { LocalModel } from "./LocalModel";
import { InstituicaoModel } from "./InstituicaoModel";

export class LocalInstituicaoModel{
    codigoLocal : number;
    codigoInstituicao: number;
    instituicao: InstituicaoModel;
    local: LocalModel;
}