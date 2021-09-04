const prompt = require('prompt-sync')();
console.log('    Projeto JOKENPÔ');
console.log('  Seja Bem Vindo a Brincadeira!!!!!!');
console.log('\n ');
escolhaFinal = 'sim';
fimdeJogo:
while (escolhaFinal ==='sim'){

var numerodeJogadas = +prompt('Digite o número de jogadas: ');


var lista =["PEDRA","PAPEL","TESOURA"];
var countUser=0;
var countPc=0;
var rodada=0;


for(let i =1; i<=numerodeJogadas; i++){
  rodada++
  console.log('\n ');
  console.log(`RODADA ${rodada}`);
  let opu = prompt('Escolha sua opção (Pedra, Papel ou Tesoura)');
  console.log('\n ');
  opu =opu.toUpperCase();
  var opcomputador = lista[Math.floor(Math.random() * lista.length)];

  console.log(`Opção do Usuario = ${opu}`);
  console.log(`Opção do Computador = ${opcomputador}`);
  if(opu!="PEDRA" && opu!="PAPEL" && opu!="TESOURA"){
    console.log('Opa! Opção Inválida');
    n++;
    rodada--;
  }
   if(opu==="PEDRA"&& opcomputador==="PEDRA"){
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${contu}`);

  }
else if(opu==="PEDRA"&& opcomputador==="PAPEL"){
  countPc++;
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`);

  }else if(opu==="PEDRA"&& opcomputador==="TESOURA" ){
    countUser++;
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`);

}else if(opu==="PAPEL"&& opcomputador==="PAPEL"){
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`);

  }else if(opu==="PAPEL"&& opcomputador==="PEDRA"){
    countUser++;
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`);    

  }else if(opu==="PAPEL"&& opcomputador==="TESOURA"){
    countPc++;
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
}else if(opu==="TESOURA"&& opcomputador==="PEDRA"){
  countPc++;
 console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`); 

  }else if(opu==="TESOURA"&& opcomputador==="PAPEL"){
    countUser++;
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);
    console.log(`Usuario = ${countUser}`); 

  }else if(opu==="TESOURA"&& opcomputador==="TESOURA"){
    console.log('### Placar ###:');
    console.log(`Computador = ${countPc}`);

   console.log(`Usuario = ${countUser}`);
  }
}
 
console.log('\n ');
console.log('Fim do Jogo!')
if(countPc>countUser){
  console.log('Vencedor: Computador');
}else if(countPc===countUser){
  console.log('Vencedor: Opa! foi um empate.')
}else{
   console.log('Vencedor: Você, parabéns!');
}

var permanecerJogo = +prompt("Deseja Jogar Novamente? Digite 1-Sim ou 2-Não: ");

while (permanecerJogo !== 1){
  console.log("Fim de Jogo!!!!");
  break fimdeJogo
}
}