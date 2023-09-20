function valorMaisAlto(arr) {
  if (arr.length === 0) return 0;

  const primeiroItemDoArray = arr.shift();
  const valorMaisAltoRetorno = valorMaisAlto(arr);
  return primeiroItemDoArray < valorMaisAltoRetorno
    ? valorMaisAltoRetorno
    : primeiroItemDoArray;
}

console.log(valorMaisAlto([4, 5, 12, 7, 80]));
