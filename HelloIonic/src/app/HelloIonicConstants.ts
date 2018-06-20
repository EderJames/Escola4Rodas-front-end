import { TipoDocumento } from "../models/TipoDocumento";

export class HelloIonicConstants{
    static readonly BASE_URL: string = "https://escola4rodas.azurewebsites.net/api/";//"http://localhost:59974/api/";
    static readonly TOKEN_URL: string = "https://escola4rodas.azurewebsites.net/"; //"http://localhost:59974/";//

    static readonly BASE_URL_PROXY_4RODAS: string = "http://192.168.100.6:8100/";

    static readonly Auth = {
        LOGIN_PROXY: 'proxylogin',
        LOGIN: 'login',
        Token: 'token',
        TOKEN_PROXY: 'proxytoken'
    };

    static readonly Produtos = {
        GET: 'produtos'
    };

    static readonly Instituicao = {
        GET: 'instituicao',
        POST: 'instituicao',
        PUT: 'instituicao',
        DELETE: 'instituicao'
    };

    static readonly proxyInstituicao = {
        GET: 'proxyinstituicao',
        POST: 'proxyinstituicao',
        PUT: 'proxyinstituicao',
        DELETE: 'proxyinstituicao'
    };

    static readonly Motorista = {
        GET: 'motorista',
        POST:'motorista',
        PUT: 'motorista',
        DELETE: 'motorista'
    }

    static readonly proxyMotorista = {
        GET: 'proxymotorista',
        POST:'proxymotorista',
        PUT: 'proxymotorista',
        DELETE: 'proxymotorista'
    }

    static readonly Passageiro = {
        GET: 'passageiro',
        POST:'passageiro',
        PUT: 'passageiro',
        DELETE: 'passageiro'
    }

    static readonly proxyPassageiro = {
        GET: 'proxypassageiro',
        POST:'proxypassageiro',
        PUT: 'proxypassageiro',
        DELETE: 'proxypassageiro'
    }

    static readonly Veiculo = {
        GET: 'veiculo',
        POST:'veiculo',
        PUT: 'veiculo',
        DELETE: 'veiculo'
    }

    static readonly proxyVeiculo = {
        GET: 'proxyveiculo',
        POST:'proxyveiculo',
        PUT: 'proxyveiculo',
        DELETE: 'proxyveiculo'
    }

    static readonly DocumentoVeiculo = {
        GET: 'documentoveiculo',
        POST:'documentoveiculo',
        PUT: 'documentoveiculo',
        DELETE: 'documentoveiculo'
    }

    static readonly proxyDocumentoVeiculo = {
        GET: 'proxydocumentoveiculo',
        POST:'proxydocumentoveiculo',
        PUT: 'proxydocumentoveiculo',
        DELETE: 'proxydocumentoveiculo'
    }

    static readonly Viagem = {
        GET: 'viagem',
        POST:'viagem',
        PUT: 'viagem',
        DELETE: 'viagem'
    }

    static readonly proxyViagem = {
        GET: 'proxyviagem',
        POST:'proxyviagem',
        PUT: 'proxyviagem',
        DELETE: 'proxyviagem'
    }

    static readonly tiposViagem = {
        SEMANAL: 'Semanal',
        DIARIA: 'Diária'
    } 

    static readonly DiaSemana = {
        GET: 'diasemana',
        POST:'diasemana',
        PUT: 'diasemana',
        DELETE: 'diasemana'
    }
}