//CALCULADORA NIVEL 1 

//somar

function somar(num01, num02) {
return num01+ num02;


}
console.log (somar(1,2));

// Subtração

function diminuir(num01, num02) {
    return num01 - num02;
    
    
    }
    console.log (diminuir(2,1)); 
      
// multiplicar

function multiplicar(num01, num02) {
    return num01* num02;
    
    
    }
    console.log (multiplicar(2,5));

 // Dividir  
 
function dividir(num01, num02) {
    return num01 / num02;
    
    
    }
    console.log (dividir(10,2));
    
//Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(num01) {
    return multiplicar(num01,num01)

}
console.log(quadradoDoNumero(2));



//Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
//Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(num01,num02,num03){
    let numeroTotalParcial = somar(num01,num02);
    var total = (numeroTotalParcial + num03);
    var resultado = dividir (total,3)
    return resultado

} 
console.log (mediaDeTresNumeros(8,2,5));


//Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
//Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
//Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

    function calculaPorcentagem (num01,num02){
        let numeroTotalParcial = multiplicar(num01,num02);
        var resultado = dividir (numeroTotalParcial,100)
        return resultado;
    }
console.log (calculaPorcentagem(300,15))

//Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
//Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200);

function geradorDePorcentagem(num1, num2) {
    let numeroTotal = multiplicar (num1, 100) 
    var resultado = dividir (numeroTotal, num2)
    return resultado+"%"
}
console.log (geradorDePorcentagem(2,200))