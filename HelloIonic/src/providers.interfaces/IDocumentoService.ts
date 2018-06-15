import { DocumentoVeiculoModel } from "../models/DocumentoVeiculoModel";
import { Observable } from "rxjs/Observable";

export interface IDocumentoService{
    listarDocumentosVeiculo(): Observable<DocumentoVeiculoModel[]>;
    atualizarDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string>;
    inserirDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string>;
    deletarDocumentoVeiculo(documentoVeiculoModel: DocumentoVeiculoModel): Observable<string>;
}