import { PassageiroModel } from "./PassageiroModel";
import { MotoristaModel } from "./MotoristaModel";

export class UsuarioModel{
    Id: number;
    Codigo : number;
    Nome: string;
    Idade: number;
    Telefone: string;
    Login: string;
    Senha: string;
    Email: string;
    Dthr: Date;
    Passageiro: PassageiroModel;
    Motorista: MotoristaModel;
}