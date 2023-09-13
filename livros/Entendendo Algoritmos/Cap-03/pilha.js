function sauda(nome) {
  console.log("Olá, " + nome + "!");
  sauda2(nome);
  console.log("Preparando para dizer tchau...");
  tchau();
}

function sauda2(nome) {
  console.log("Como vai, " + nome + "?");
}

function tchau() {
  console.log("Ok, tchau!");
}
