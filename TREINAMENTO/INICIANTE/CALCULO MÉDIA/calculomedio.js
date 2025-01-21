alert ("Bem vindo ao Cálculo Médio");

// 1. Solicitar as três notas do usuário
let Nota01 = parseFloat(prompt("Digite a nota 01"));
let Nota02 = parseFloat(prompt("Digite a nota 02"));
let Nota03 = parseFloat(prompt("Digite a nota 03"));

// 2. Calcular a média das notas
let media = (Nota01 + Nota02 + Nota03 ) / 3;

// 3. Exibir a média no console
console.log("Média do aluno:", media.toFixed(2)); 

// Exibindo a média com duas casas decimais

// 4. Verificar se o aluno foi aprovado ou reprovado

function exibirTexto(){
    
if (media >= 7) {
    alert ("Parabéns! O aluno foi aprovado.");
} else {
    alert ("O aluno foi reprovado. Precisa melhorar.");
}
}

