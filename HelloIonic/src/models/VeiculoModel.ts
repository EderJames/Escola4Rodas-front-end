import { MotoristaModel } from "./MotoristaModel";
import { DocumentoVeiculoModel } from "./DocumentoVeiculoModel";
import { ViagemModel } from "./ViagemModel";

export class VeiculoModel{
    codigoVeiculo: number;
    nome: string;
    placa: string;
    cargaMaxima: number;
    codigoMotorista: number;
    dthr: Date;

    motorista: MotoristaModel;
    documentos: DocumentoVeiculoModel[];
    viagens: ViagemModel[];

}