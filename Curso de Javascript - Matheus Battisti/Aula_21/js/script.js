//Com break podemos encerrar uma intrução.
//Com o continue podemos pular uma instrução.
//Utilizados na maioria das vezes em loops.

for (var i = 10; i > 0; i--) {5

    console.log(i)

    if(i == 5) {
        break;
    }

    
} 

console.log('Deu o break!');

var x = 10;

while (x  < 100) {
    
    x += 10;

    if(x == 60 || x == 80) {
        console.log('CONTINUE')
        continue;
    }

    console.log('Testando o continue' + x)
    
}