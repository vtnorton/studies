const numeros = [2, 3, 7, 8, 10];

// O(n)
for (let i = 0; i < numeros.length; i++) {
  let valorMultiplicadorDoPrimeiroFor = numeros[i];

  //O(n)
  for (let multiplicaPelo = 0; multiplicaPelo < numeros.length; multiplicaPelo++) {
    let valorMultiplicadorDoSegundoFor = numeros[multiplicaPelo];
    const resultado = valorMultiplicadorDoPrimeiroFor * valorMultiplicadorDoSegundoFor;
    console.log(resultado);
  }
}

// O(n) * O(n)
// O(n * n)
// O(n²)
