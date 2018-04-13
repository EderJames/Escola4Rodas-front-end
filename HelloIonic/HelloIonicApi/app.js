var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true}));
app.use(cors());


app.post('/api/login', function(req, res){
    var email = req.body.email;
    var senha = req.body.senha;

    if(email != 'edeleno12@gmail.com' || senha != '123456'){
        setTimeout(function(){ 
            console.log(req.body.email + " - " + req.body.senha);
            res.status(401).send({
                'erro':{
                    'http_code': 401,
                    'code': 'unauthorized',
                    'mensagem': 'Login e/ou senha inválidos'
                }
            })
        }, 4000);
    }
    else{
        setTimeout(function(){
            res
                .header('Access-Control-Allow-Origin', '*')
                .status(200).send({
                    'data':{
                        'nome':'Eder James',
                        'email': 'edeleno12@gmail.com',
                        'token': 'este_e_o_token'
                    }
                })  
        }, 4000);
    }
});

app.get('/api/produtos', function(req, res){
    if(req.header('token') != 'este_e_o_token'){
        setTimeout(function(){
            res.status(401).send({
                'erro':{
                    'http_code': 401,
                    'code': 'unauthorized',
                    'mensagem': 'Login e/ou senha inválidos'
                }
            })
        }, 4000);
    }
    else{
        setTimeout(function(){
            res.status(200).send({
                data:{
                    produtos: [
                        {
                            id: 1,
                            nome: 'Chocolate',
                            categoria: 'doce',
                            descricao: 'Chocolate muito gostoso'
                        },
                        {
                            id: 2,
                            nome: 'Coxinha',
                            categoria: 'salgado',
                            descricao: 'A melhor coxinha do mundo'
                        },
                        {
                            id: 3,
                            nome: 'Açai',
                            categoria: 'doce',
                            descricao: 'O melhor açaí do  mundo'
                        },
                        {
                            id: 4,
                            nome: 'Pizza',
                            categoria: 'salgado',
                            descricao: 'Pizza calabresa'
                        },
                        {
                            id: 5,
                            nome: 'Bala',
                            categoria: 'doce',
                            descricao: 'Bala macia pra crianças'
                        },
                        {
                            id: 6,
                            nome: 'Arroz',
                            categoria: 'salgado',
                            descricao: 'arroz soltinho'
                        },
                        {
                            id: 7,
                            nome: 'Refrigerante',
                            categoria: 'doce',
                            descricao: 'Coca-cola'
                        }
                    ]
                }
            })
        }, 4000);
    }
});

app.listen(3000);
console.log('A api está no ar');