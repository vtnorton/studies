const grafo = {};

grafo["inicio"] = {};
grafo["inicio"]["a"] = 5;
grafo["inicio"]["b"] = 2;

grafo["a"] = {};
grafo["a"]["c"] = 4;
grafo["a"]["d"] = 2;

grafo["b"] = {};
grafo["b"]["a"] = 8;
grafo["b"]["d"] = 7;

grafo["c"] = {};
grafo["c"]["fim"] = 3;
grafo["c"]["d"] = 6;

grafo["d"] = {};
grafo["d"]["fim"] = 1;

grafo["fim"] = {};

const custos = {};
custos["a"] = 6;
custos["b"] = 2;
custos["c"] = Infinity;
custos["d"] = Infinity;
custos["fim"] = Infinity;

const pais = {};
pais["a"] = "inicio";
pais["b"] = "inicio";
pais["c"] = null;
pais["d"] = null;
pais["fim"] = null;

const processados = [];

let no = ache_no_custo_mais_baixo(custos);

while (no) {
  const custo = custos[no];
  const vizinhos = grafo[no];

  for (const key in vizinhos) {
    const novo_custo = custo + vizinhos[key];

    if (custos[key] > novo_custo) {
      custos[key] = novo_custo;
      pais[key] = no;
    }
  }

  processados.push(no);
  no = ache_no_custo_mais_baixo(custos);
  console.log("no", no);
}

console.log(pais);

function ache_no_custo_mais_baixo(custos) {
  let custo_mais_baixo = Infinity;
  let nodo_custo_mais_baixo = null;
  for (const nodo in custos) {
    const custo = custos[nodo];

    if (custo < custo_mais_baixo && !processados.includes(nodo)) {
      custo_mais_baixo = custo;
      nodo_custo_mais_baixo = nodo;
    }
  }

  return nodo_custo_mais_baixo;
}
