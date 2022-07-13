// AULA ATRIBUIÇÃO VIA DESESTRUTURAÇÃO(ARRAYS)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [lista1, lista2, lista3] = numeros;
// console.log(lista3[2]);

// AULA ATRIBUIÇÃO VIA DESESTRUTURAÇÃO(OBJETOS)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
endreco: {
    Rua: 'Av Brasi',
    numero: 320
}
};

const {nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);