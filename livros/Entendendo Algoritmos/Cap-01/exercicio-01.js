// exercício 01: https://leetcode.com/problems/search-insert-position/

const searchInsert = (lista, alvo) => {
  let indiceMinimo = 0;
  let indiceMaximo = lista.length - 1;
  let posicaoDoMeio;

  if (alvo < lista[0]) return 0;

  while (indiceMinimo <= indiceMaximo) {
    posicaoDoMeio = parseInt((indiceMinimo + indiceMaximo) / 2);
    const listaMeio = lista[posicaoDoMeio];

    if (listaMeio == alvo) {
      return posicaoDoMeio;
    }

    if (listaMeio > alvo) {
      indiceMaximo = posicaoDoMeio - 1;
      if (betweenList(lista[indiceMaximo], listaMeio, alvo))
        return posicaoDoMeio;
    } else {
      indiceMinimo = posicaoDoMeio + 1;
      if (betweenList(listaMeio, lista[indiceMinimo], alvo))
        return indiceMinimo;
    }
  }

  return posicaoDoMeio + 1;
};

const betweenList = (min, max, alvo) => {
  return alvo > min && alvo < max;
};

lista = [1, 3];
searchInsert(lista, 2); // 1
