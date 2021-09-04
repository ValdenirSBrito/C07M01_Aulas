const prompt = require('prompt-sync')();

let nome = {}
nome.nome = prompt("Digite seu Nome: ");
nome.idade = +prompt("Digite sua Idade: ");
nome.cidade = prompt("Digite sua Cidade: ");
nome.endereco = prompt("Digite seu Endereço: ");
console.log(nome);
console.log();
delete nome.endereco
console.log(nome);