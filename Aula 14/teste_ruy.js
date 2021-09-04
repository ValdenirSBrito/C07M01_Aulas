const prompt = require('prompt-sync')();

while (escolhaFinal === "Sim"){
    let pergunta = prompt('Vamos jogar o jogo do Dado?')
   
   let perguntavalidade = pergunta.toUpperCase();
   
   console.log()
   
   if(perguntavalidade ==='SIM'){
     console.log('Vamos Jogar!');
   } else if (perguntavalidade === 'NÃO'){
     console.log('Vamos lá vai, vamos jogar!');
     //break;
   }
   
   var rodadas = +prompt("Quantas rodadas você quer jogar?");
   
   console.log();
   
   console.log(`Ha legal, melhor de ${rodadas} então!`);
   
   for (let i = 0; i <= (rodadas - 1) ; i++) {
    const jogadores = {}
     var j = +prompt("Quantos jogadores vão jogar?");{
          jogadores.nome = prompt("Nome: ")
          jogadores.numero = +prompt("número: ")
   }
   
   numeros.push(jogadores);
   
   function rollSingleDice()
   {
       return Math.floor(Math.random()*6+1);
   }
   const numeros = [];
   const escolha = (numeros[random(0,numeros.length)]);
   console.log( `${escolha}`);
   console.log(); 
   
   function rollDice(player) {
   var jogo = 0;
   var jogadores1, jogadores2;
   var playerScore;
   
           jogadores = rollSingleDice();
           jogadores = rollSingleDice();
           jogo = jogador1 + jogador2;
           player.addToScore(jogo);
           playerScore = player.getScore();
           console.log("jogador1: " + jogador1 + " jogador2: " + jogador2 + " Total jogos: " + playerScore);
   
           if (jogador1 ==jogador2) {
               if (jogador1 === 1) {
                   console.log("tomar duas vezes");
                   return true;
               } else {
                   console.log("Parabéns!!");
               }
           }
   }
   }
}