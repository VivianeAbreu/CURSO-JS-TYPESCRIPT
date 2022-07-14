// aula 60
// EScreva uma função que recebe 2 números e retorne o maior deles
// retorne o maior deles

// function max(x, y) {
    //    return x >y ? x : y;
  //  }

   /* const max2 = (x, y) => x > y ? x : y;
console.log(max2(100, 20)); */


// aula 61
// Escreva uma função chamada ePaisagem que
// que receb dois argumentos, largura e altura
// de uma imagem (number)
// retorne true se a imagem estiver no modo
// paisagem

// const ePaisagem = (largura, altura) => largura > altura;
//  console.log(ePaisagem(1920, 1080));

//aula 62
// Escreva uma função que recebe um numero e retorne o seguinte:
// Numero e divisivel por 3 = Fizz
// Numero e divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizBuzz
// Numero não e divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero e realmente um numero = Retorna o proprio numero
// Use a função com numeros de 0 a 100

function FizBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz;'
    if (numero % 5 === 0) return 'Buzz' 
    if (numero % 3 === 0) return 'Fizz;' 
    return numero;

}
 for (let i = 0; i <= 100; i++) {
    console.log(i, FizBuzz(i))
 }