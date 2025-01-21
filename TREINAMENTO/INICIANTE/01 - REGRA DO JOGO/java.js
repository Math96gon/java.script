alert("Bem-vindo ao jogo: Adivinhe o Número!");

// Gerar um número aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Inicializar variáveis
let palpite;
let tentativas = 0;
let limiteTentativas = 3;

// Loop para o jogo
//while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Digite um número entre 1 e 10:"));
    tentativas++;

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`);
    } else {
        alert("Errado! Tente novamente.");
    }
//}


while (tentativas<limiteTentativas) {
    palpite = parseInt (prompt(`Tentativa ${tentativas + 1}/${limiteTentativas}: Digite um número entre 1 e 10:`));
    tentativas++;

    if (palpite === numeroSecreto) {
        alert (`Parabén! acertou o número secreto(${numeroSecreto}) em ${tentativas} tentativas.`)
    }
}
