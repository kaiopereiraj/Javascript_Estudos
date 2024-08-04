var idade = 16;
var nome = 'Pedro';

if (nome == 'João' && idade == 16) {
    console.log('O João pode entrar na aula de Boxe')
} else {
    console.log('Esse não é o João')
}

if (1 == 1 && 3 > 2 && true) {
    console.log('Passou')
}

if ((1 == 1 && 3 > 3) && true) {
    console.log('Passou')
} else if (nome == 'Pedro' && idade > 14) {
    console.log('Aqui passa')
}