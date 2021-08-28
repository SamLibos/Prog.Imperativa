// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

// ** 1º DESAFIO

const pass = '1234';

if (pass === '1234') {

    console.log(`ACESSO PERMITIDO`);

} else {

    console.log(`ACESSO NEGADO`);

}

// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

// ** 2º DESAFIO

var n1 = 10;
var n2 = 10;

function comparaNumeros(n1, n2) {

    if(n1 > n2) {

        console.log(`O número 1 é maior`);

    } else if(n1 < n2) {

        console.log(`O número 2 é maior`);

    } else {

        console.log('Os números são iguais');

    }

}

comparaNumeros(n1, n2);

// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

// ** 3º DESAFIO

let numeroMes = 1;

function dizOMes(n) {

    switch (n) {

        case 1:
            console.log('Janeiro');
            break
        case 2:
            console.log('Fevereiro');
            break
        case 3:
            console.log('Março');
            break
        case 4:
            console.log('Abril');
            break
        case 5:
            console.log('Maio');
            break
        case 6:
            console.log('Junho');
            break
        case 7:
            console.log('Julho');
            break
        case 8:
            console.log('Agosto');
            break
        case 9:
            console.log('Setembro');
            break
        case 10:
            console.log('Outubro');
            break
        case 11:
            console.log('Novembro');
            break
        case 12:
            console.log('Dezembro');
            break
        default:
            console.log('Mês inválido');
            
    }

}

dizOMes(numeroMes);


// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

// ** 4º DESAFIO
// console.log(`${pass === '1234' ? 'ACESSO PERMITIDO' : 'ACESSO NEGADO'}`);
console.log(pass === '1234' ? 'ACESSO PERMITIDO' : 'ACESSO NEGADO');


// Microondas 

var prato = ["pipoca", "macarrao", "carne", "feijao ", "brigadeiro"]
var tempoDePreparo ;



function preparoComida ( cardapio , tempoDefinido) {

    

    switch (cardapio) {
        case "pipoca":
            tempoDePreparo = 10;    
            break;
    
        case "macarrao":
            tempoDePreparo = 8;
            break;
    
        case "carne":
            tempoDePreparo = 15;
            break;
        
        case "feijao":
            tempoDePreparo = 12;
            break;
    
        case "brigadeiro":
            tempoDePreparo = 8;
            break;
        
        default :
        console.log ( "Prato Inexistente")
        
    }
    

    if ( tempoDefinido < tempoDePreparo) {
        console.log ( "Tempo Insuficiente");


    }else if ( tempoDefinido >= tempoDePreparo && tempoDefinido <= tempoDePreparo *2 ){
         console.log ( "Prato Pronto , Bom APetite !!!");

    } else if ( tempoDefinido >= tempoDePreparo * 2 && tempoDefinido <=tempoDePreparo *3 ){
     console.log ( "Comida Qeimou ");
    } else {

    return console.log ("KABOOOOOMMM !!!!")}
}


preparoComida ("brigadeiro",17)


