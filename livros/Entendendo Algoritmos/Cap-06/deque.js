function FilaDePesquisa() {
  let grafo = {};

  grafo["voce"] = ["alice", "bob", "claire"];
  grafo["bob"] = ["anuj", "peggy"];
  grafo["alice"] = ["peggy"];
  grafo["claire"] = ["thom", "jonny"];
  grafo["anuj"] = [];
  grafo["peggy"] = [];
  grafo["thom"] = [];
  grafo["jonny"] = [];

  let fila_de_pesquisa = []; //push, shift
  let visitados = [];
  console.log(visitados);
  fila_de_pesquisa.push(...grafo["voce"]);

  for (let i = 0; i < fila_de_pesquisa.length; i++) {
    let pessoa = fila_de_pesquisa[i];
    if (!visitados.includes(pessoa)) {
      visitados.push(pessoa);
      if (pessoa_eh_vendedor(pessoa)) {
        console.log(pessoa + " é um vendedor de manga!");
        return true;
      } else {
        fila_de_pesquisa.push(...grafo[pessoa]);
      }
    }
  }
}

function pessoa_eh_vendedor(pessoa) {
  return pessoa === "thom";
}

FilaDePesquisa();
