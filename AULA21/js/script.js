function meuEscopo () {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const pessoas = [];

function recebeEventoForm (evento){
    evento.preventDefault();

const Nome = form.querySelector('.Nome');
const Sobrenome = form.querySelector('.Sobrenome');
const Peso = form.querySelector('.Peso');
const Altura = form.querySelector('.Altura');

pessoas.push({
    Nome: Nome.nodeValue,
    Sobrenome: Sobrenome.nodeValue,
    Peso: Peso.nodeValue,
    Altura: Altura.nodeValue,

});

console.log(pessoas);

    resultado.innerHTML += `<p>${Nome.value} ${Sobrenome.value}` +
     `${Peso.value} ${Altura.value}`;
}

form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();