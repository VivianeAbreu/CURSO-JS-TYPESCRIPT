// i - index        0         1      2
// for in -> lê os índice ou chaves do objeto
//            0123456789......
 const nome = 'Luiz Otavio';

//for (let i = 0; i < nome.length; i++) {
  //  console.log(nome[i]);
//}

// for (let i in nome) {
   // console.log(nome[i]);
// }


for (let valor of nome) {
    console.log(valor);
}



//  const pessoa = {
//   nome: 'Luiz',
//  sobrenome: 'Otavio',
//    idade: 30
//   }

// for (let chave in pessoa) {
// console.log(chave, pessoa[chave]);
// }


// for (let i = 0; i < frutas.length; i++) {
// console.log(`Indice ${i}`, frutas[i]);
// }
