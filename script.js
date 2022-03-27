const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
let perguntaSimNao = prompt(
  "Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 não)"
);
while (perguntaSimNao === "1") {
  var alimento = prompt("Qual alimento você deseja inserir?");

  var categoria = prompt(
    "Em qual categoria esse alimento se encaixa? (responda 1 = frutas, 2 = laticinios, 3 = congelados ou 4 = doces?)"
  );

  if (categoria === "1") {
    frutas.push(alimento);
  } else if (categoria === "2") {
    laticinios.push(alimento);
  } else if (categoria === "3") {
    congelados.push(alimento);
  } else if (categoria === "4") {
    doces.push(alimento);
  }

  perguntaSimNao = prompt(
    "Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não)"
  );
}

if (perguntaSimNao === "2") {
  document.getElementById(
    "lista"
  ).innerHTML = `<h1>Lista de Compras</h1><br><br><h2>Frutas:</h2> <br> <p>${frutas}</p><br><br> <h2>Laticínios:</h2><br> ${laticinios}<br><br> <h2>Congelados:</h2> <br> <p>${congelados}</p><br><br> <h2>Doces:</h2> <br> <p>${doces}</p>`;
}