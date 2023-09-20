function soma(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    const arraryNoSoma = arr;
    const primeiroItemDoArray = arr.shift();
    return primeiroItemDoArray + soma(arr);
  }
}

console.log(soma([3, 4, 5, 6, 7, 8])); // 33
