import {ProdutoModel} from '../models/ProdutoModel';
import { Observable } from 'rxjs/observable';

export interface IProdutoService{
    listarProdutos(): Observable<ProdutoModel[]>;
    
}