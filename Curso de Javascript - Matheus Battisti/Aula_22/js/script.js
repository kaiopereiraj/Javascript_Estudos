//Funções são blocos de códigos reutilizáveis.
//Ou seja, evitamos a repetição lógica de um programa em diversas partes do código.
//A função precisa ser invocada para ser executada.

function primeiraFuncao() {
    console.log('Hello World das funções');
}

primeiraFuncao();

function dizerNome(nome) {
    console.log('O nome é ' + nome)
}

dizerNome('Kaio');
dizerNome('Joaquim');
dizerNome('Corinthians')

var NomeDoBancoDeDados = 'Kaio';

dizerNome(NomeDoBancoDeDados);


function soma(a, b) {
    var soma = a + b;
    return soma;
}

var soma1  = soma(2, 5);

console.log(soma1)

var soma2 = soma(3, 6);

console.log(soma2)

console.log(soma(4, 6))