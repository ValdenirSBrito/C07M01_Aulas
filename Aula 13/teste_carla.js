const prompt = require('prompt-sync')();

let rodadaGanha = 0
let rodadaPerde = 0
let rodadaEmpate = 0

 var dado1 = Math.floor(Math.random() * 6) + 1;
 var dado2 = Math.floor(Math.random() * 6) + 1;
 var dado3 = Math.floor(Math.random() * 6) + 1;
var dado4 = Math.floor(Math.random() * 6) + 1;
 
 console.log("Bem-vinda(o) ao jogo de dados. Vamos ver como está sua sorte hoje?");
console.log();

let rodadas = +prompt("Quantas rodadas você quer jogar?");
var jogadores = +prompt("Quantos jogadores irão jogar contra você (Entre 1 e 3?");
// var nome = prompt ("Qual seu nome?");

for (let i = 0; i <= rodadas; i++){

let jogadorhumano = {nome: prompt ("Qual seu nome?")}
jogadorhumano.escolha = dado4

let jogador1 = {nome: "Jogador 1"}
jogador1.escolha = dado1

let jogador2 = {nome: "Jogador 2"}
jogador2.escolha = dado2

let jogador3 = {nome: "Jogador 3"}
jogador3.escolha = dado3

console.log(jogadorhumano);
console.log();
console.log(jogador1);
console.log();
console.log(jogador2);
console.log();
console.log(jogador3);

}