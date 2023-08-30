const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Oi, estamos no clube do livro de k8s!");
  res.end();
});

server.listen(8083);
console.log("Ouvindo na porta 8083");
