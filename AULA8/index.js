/*
Helena Vieira Abreu tem 05 anos, pesa 20 kg
tem 1.2 de altura e seu IMC é de 12.3874834738
Helena Vieira nasceu em 2017
*/

const nome = 'Helena Vieira';
const sobrenome = 'Abreu';
const idade = 05;
const peso = 20;
const alturaEmM = 1.20;
let IMC; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

anoNascimento = 2022 - idade;
console.log(anoNascimento);

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


