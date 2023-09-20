function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivo = arr[0];
    const menores = [];
    const maiores = [];

    for (let i = 1; i < arr.length; i++) {
      const valor = arr[i];
      if (valor > pivo) {
        maiores.push(valor);
      } else {
        menores.push(valor);
      }
    }

    //return [...quicksort(menores), privo, ...quicksort[maiores]]
    return [].concat(quicksort(menores), [pivo], quicksort(maiores));
  }
}

const arr1 = [9, 8, 5, 2, 3, 10, 58];
const arr2 = [3, 2];
const arr3 = [4];

const resultado1 = quicksort(arr1);
const resultado2 = quicksort(arr2);
const resultado3 = quicksort(arr3);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
