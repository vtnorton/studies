const grafo = {};

grafo["inicio"] = {};
grafo["inicio"]["a"] = 6;
grafo["inicio"]["b"] = 2;

grafo["a"] = {};
grafo["a"]["fim"] = 1;

grafo["b"] = {};
grafo["b"]["a"] = 3;
grafo["b"]["fim"] = 5;

grafo["fim"] = {};

const infinito = Infinity;

const custos = {};
custos["a"] = 6;
custos["b"] = 2;
custos["fim"] = infinito;

const pais = {};
pais["a"] = "inicio";
pais["b"] = "inicio";
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
