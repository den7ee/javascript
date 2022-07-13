//define a constante com o comando http de node
const http = require('http');
const host = 'http://localhost';
const porta = 3000;
const stats =  './';

//exibe o resultado do comando
//console.log(http);


// Criar o servidor, só que não. É necessário informar os 2 parâmetros;
//http.createServer()

//Criar de fato o servidor,  a porta 3000 e exibindo a resposta no log do console
http.createServer((req, res) => {
    res.end('<h1>Working...</h1>')
}).listen(porta, () => console.log(`Server is runing in ${host}:${porta}`));