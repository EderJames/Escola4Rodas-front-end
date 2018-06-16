import { VeiculoModel } from "./VeiculoModel";
import { DateTime } from "ionic-angular";

export class DocumentoVeiculoModel{
    Codigo: number;
    Nome_Documento: string;
    Descricao: string;
    Validade: DateTime;
    Dthr: Date;
    Codigo_Tipo_Documento: number;
    Codigo_Veiculo: number;
    veiculo: VeiculoModel;
}