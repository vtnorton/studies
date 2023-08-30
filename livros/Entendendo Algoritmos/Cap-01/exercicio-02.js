// https://leetcode.com/problems/missing-number/

const verificaNumeroAtualMaximo = (min, max) => {
  return min === max;
};

const missingNumber = function (nums) {
  const listaOrdenada = nums.sort((a, b) => a - b);

  let menorPosicaoNaLista = 0;
  let maiorPosicaoNaLista = listaOrdenada.length - 1;
  let posicaoDoMeio;

  if (listaOrdenada[0] !== 0) return 0;

  while (menorPosicaoNaLista <= maiorPosicaoNaLista) {
    posicaoDoMeio = parseInt((menorPosicaoNaLista + maiorPosicaoNaLista) / 2);

    if (posicaoDoMeio == listaOrdenada[posicaoDoMeio]) {
      const proximaPosicao = posicaoDoMeio + 1;
      if (listaOrdenada[posicaoDoMeio] + 1 !== listaOrdenada[proximaPosicao])
        return proximaPosicao;

      menorPosicaoNaLista = proximaPosicao;
    }

    if (posicaoDoMeio < listaOrdenada[posicaoDoMeio])
      maiorPosicaoNaLista = posicaoDoMeio - 1;
  }

  return listaOrdenada.length;
};

const nums = [0, 3, 5, 8, 4, 6, 1, 9, 7];
const retorno = missingNumber(nums); // 2
console.log(retorno);
