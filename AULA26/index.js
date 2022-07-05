// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date (0 + tresHoras + umDia);


//);
// console.log(Date.now());
function zeroAesquerda (num) {
    return num >=10 ? num : `0${num}`;
}

function formataData(data) {
const dia = zeroAesquerda(data.getDate());
const mes = zeroAesquerda(data.getMonth() + 1);
const ano = zeroAesquerda(data.getFullYear());
const hora = zeroAesquerda(data.getHours());
const min = zeroAesquerda(data.getMinutes());
const seg = zeroAesquerda(data.getSeconds());
return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
