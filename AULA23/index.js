/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// IF pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem

/*const hora = 50;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
} else if (hora >=12 && hora <= 17){
console.log('Boa tarde');
} else if (hora >=18 && hora <= 23) {
    console.log ('Boa noite');
} else {
    console.log('Olá');
}
*/
const numero = 10;

if(numero >= 0 && numero <= 5) {
    console.log('O numero esta entre 0 e 5.');
} else if (numero >=6 && numero<=8) {
    console.log('O numero esta entre 6 e 8.');
} else if (1 === 1){ // Verdadeiro
    console.log('LITERAL');
} else if (numero >=9 && numero <= 11) { // verdadeiro
    console.log('O numero não esta entre 9 e 11.');
} else { 
    console.log('O numero não esta entre 0 e 11.');

}
    console.log('... Aqui vai o resto do código.');



