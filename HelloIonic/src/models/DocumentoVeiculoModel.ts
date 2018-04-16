import { VeiculoModel } from "./VeiculoModel";

export class DocumentoVeiculoModel{
    codigo: number;
    nomeDocumento: string;
    descricao: string;
    validade: Date;
    dtrh: Date;
    codigoTipoDocumento: number;
    codigoVeiculo: number;

    veiculo: VeiculoModel;
}