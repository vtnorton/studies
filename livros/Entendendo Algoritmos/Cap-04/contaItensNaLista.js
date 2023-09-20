function novoPontoLength(arr) {
  if (arr.length == 0) {
    return 0;
  }

  arr.shift();
  return 1 + novoPontoLength(arr);
}

console.log(
  novoPontoLength(["vitor", "monica", "morgs", "aline", "jureg agroboy"])
);
