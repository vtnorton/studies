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
console.log(buscaMenor(numeros)); // 5
