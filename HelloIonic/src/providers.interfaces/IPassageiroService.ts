import { PassageiroModel } from "../models/PassageiroModel";
import { Observable } from "rxjs/Observable";

export interface IPassageiroService{
    listarPassageiros(): Observable<PassageiroModel[]>;   
}