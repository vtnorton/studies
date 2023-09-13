function contagemRegressiva(numero) {
  console.log(numero);

  if (numero < 1) {
    // caso-base
    return;
  } else {
    // caso-recursivo
    contagemRegressiva(numero - 1);
  }
}

contagemRegressiva(10);
