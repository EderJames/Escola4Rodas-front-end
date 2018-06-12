import { MotoristaModel } from "./MotoristaModel";
import { DocumentoVeiculoModel } from "./DocumentoVeiculoModel";
import { ViagemModel } from "./ViagemModel";

export class VeiculoModel{
    
    Codigo_Veiculo: number;
    Nome: string;
    Placa: string;
    Carga_Maxima: number;
    Codigo_Motorista: number;
    Dthr: Date;

    Motorista: MotoristaModel;
    Documentos: DocumentoVeiculoModel[];
    Viagens: ViagemModel[];

}