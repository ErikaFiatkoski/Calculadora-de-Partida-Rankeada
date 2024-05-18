//variaveis para facilitar o processo de retorno das mensagens ao usuario
const mensagem1 = "O Herói tem o saldo ";
const mensagem2 = " e está no nível de ";

let vitorias = 208;
let derrotas = 100;
let saldoVitorias = 0;

verificarRanking();

function calculoSaldo(vitorias, derrotas) {
  saldoVitorias = vitorias - derrotas;
  return saldoVitorias;
}

function verificarRanking() {
  calculoSaldo(vitorias, derrotas);

  if (saldoVitorias <= 10) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Ferro");
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Bronze");
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Prata");
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Ouro");
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Diamante");
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Lendário");
  } else if (saldoVitorias >= 101) {
    console.log(mensagem1 + saldoVitorias + mensagem2 + "Imortal");
  }
} //fecha funcao verificarRanking
