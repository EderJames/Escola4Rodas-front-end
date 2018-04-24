export class HelloIonicConstants{
    static readonly BASE_URL: string = "http://192.168.1.8:3000/api";

    static readonly BASE_URL_PROXY_4RODAS: string = "http://192.168.1.8:8100/";

    static readonly Auth = {
        LOGIN_PROXY: 'proxylogin',
        LOGIN: 'login'
    };

    static readonly Produtos = {
        GET: 'produtos'
    };

    

    static readonly Instituicao = {
        GET: 'proxyinstituicao',
        POST: 'proxyinstituicao',
        PUT: 'proxyinstituicao',
        DELETE: 'proxyinstituicao'
    };

    static readonly Motorista = {
        GET: 'proxymotorista',
        POST:'proxymotorista',
        PUT: 'proxymotorista',
        DELETE: 'proxymotorista'
    }

    static readonly Passageiro = {
        GET: 'proxypassageiro',
        POST:'proxypassageiro',
        PUT: 'proxypassageiro',
        DELETE: 'proxypassageiro'
    }

    static readonly Veiculo = {
        GET: 'proxyveiculo',
        POST:'proxyveiculo',
        PUT: 'proxyveiculo',
        DELETE: 'proxyveiculo'
    }

    static readonly Viagem = {
        GET: 'proxyviagem',
        POST:'proxyviagem',
        PUT: 'proxyviagem',
        DELETE: 'proxyviagem'
    }
}