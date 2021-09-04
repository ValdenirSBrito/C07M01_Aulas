const prompt = require('prompt-sync')({sigint: true});
console.log("Bem vind@ ao Super Dado Turbo!")
var jogar = 0
while(jogar==0){
let rodadas = +prompt("Quantas rodadas você deseja jogar? ");
let jogadores = +prompt("Quantos jogadores irão jogar? ")
let lista = [];
for (let i = 0; i < jogadores; i++) {
    let jogador = {};
    jogador.Nome = prompt(`Digite o nome do jogador ${(i+1)}: `);
    let somatoria = 0
    for (let i = 0; i < rodadas; i++) {
      let dado = Math.floor(Math.random() * 6) + 1;
      console.log(`no ${i+1}º dado caiu o número ${dado}`)
      somatoria = somatoria + dado;
      jogador.Somatoria = somatoria; 
    }
    lista.push(jogador);

    
}
lista.sort(function (a, b) {
  if (a.Somatoria > b.Somatoria) {
    return -1;
  }
  if (a.Somatoria < b.Somatoria) {
    return 1;
  }
  else{
  return 0;
  }
});
console.log(lista);
console.log(`O campeão foi ${lista[0].Nome}!`);
for (let sair=0;sair==0;){
  var jogarNovamente = prompt("Gostaria de jogar novamente? ").toLowerCase();
if (jogarNovamente =="sim"||jogarNovamente =="s") {
   console.log("Legal!");
   sair=1;
 } else if (jogarNovamente == "não"||jogarNovamente =="nao"||jogarNovamente == "n") {
   console.log("Obrigado por jogar!");
   sair=1;
   jogar=1;
 } else {
   console.log("Não entendi!");
 }
}
}
