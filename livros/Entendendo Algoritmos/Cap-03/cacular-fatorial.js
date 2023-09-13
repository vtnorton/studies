function fatorial(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * fatorial(x - 1);
  }
}

const resultado = fatorial(3);
console.log(resultado);
