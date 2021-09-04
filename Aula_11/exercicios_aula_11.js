// O programa tem que:
// • Perguntar quantas rodadas você quer fazer;
// • Perguntar quantos jogadores vão jogar;
// • Criar um objeto pra cada jogador com nome e número tirado;
// • Guarda todos os objetos em uma lista;
// • Ordenar esses objetos, sabendo que o vencedor tirou o maior número
// no dado.
// • Mostrar no final qual jogador ganhou mais rodadas e foi o grande
// campeão.

const prompt = require('prompt-sync')();

let numeroJogadas = +prompt("Digite o Número de Jogadas: ");
let qtdJogadores = +prompt("Digite a Quantidade de Jogadores: ");

//lista.sort((a, b) => b.numero - a.numero);