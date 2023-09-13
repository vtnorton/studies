function ordenacao(array) {
  let novoArray = [];
  let tamanhoArray = array.length;

  for (let i = 0; i < tamanhoArray; i++) {
    const menorNumero = buscaMenor(array);
    const posicaoMenorNumero = array.indexOf(menorNumero);

    novoArray.push(menorNumero);
    array.splice(posicaoMenorNumero, 1);
  }

  return novoArray;
}

function buscaMenor(array) {
  let menorNumero = array[0];

  for (elemento of array) {
    if (elemento < menorNumero) {
      menorNumero = elemento;
    }
  }

  return menorNumero;
}

const numeros = [13, 22, 10, 30, 5, 9, 16, 28];
console.log(ordenacao(numeros));
