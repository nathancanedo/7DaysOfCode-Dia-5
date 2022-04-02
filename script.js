const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];
let perguntaSimNao = prompt(
  "Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 não)"
);
let encerrarPrograma = false;

while (encerrarPrograma === false) {
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
      `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
    );

    if (perguntaSimNao === "3") {
      encerrarPrograma = true;
    }

    while (perguntaSimNao === "3") {
      var removerItem = prompt(
        `Você deseja remover um item de qual categoria? (1 = frutas, 2 = laticinios, 3 = congelados, 4 = doces)`
      );

      if (removerItem === "1") {
        var removerFrutas = prompt(
          `Os itens dessa categoria são: ${frutas}. Qual você deseja remover?`
        );
        var iFrutas = frutas.indexOf(removerFrutas);
        frutas.splice(iFrutas, 1);
        alert(`${removerFrutas} foi removido com sucesso!`);
        encerrarPrograma = false;
        perguntaSimNao = prompt(
          `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
        );
      } else if (removerItem === "2") {
        var removerLaticinios = prompt(
          `Os itens dessa categoria são: ${laticinios}. Qual você deseja remover?`
        );
        var iLaticinios = laticinios.indexOf(removerLaticinios);
        laticinios.splice(iLaticinios, 1);
        alert(`${removerLaticinios} foi removido com sucesso!`);
        perguntaSimNao = prompt(
          `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
        );
        encerrarPrograma = false;
      } else if (removerItem === "3") {
        var removerCongelados = prompt(
          `Os itens dessa categoria são: ${congelados}. Qual você deseja remover?`
        );
        var iCongelados = congelados.indexOf(removerCongelados);
        congelados.splice(iCongelados, 1);
        alert(`${removerCongelados} foi removido com sucesso!`);
        perguntaSimNao = prompt(
          `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
        );
        encerrarPrograma = false;
      } else if (removerItem === "4") {
        var removerDoces = prompt(
          `Os itens dessa categoria são: ${doces}. Qual você deseja remover?`
        );
        var iDoces = doces.indexOf(removerDoces);
        doces.splice(iDoces, 1);
        alert(`${removerDoces} foi removido com sucesso!`);
        perguntaSimNao = prompt(
          `Você deseja adicionar um alimento a sua lista de compras? (responda com 1 para sim ou 2 para não ou 3 para remover algum elemento da lista)`
        );
        encerrarPrograma = false;
      }
    }
  }
  if (perguntaSimNao === "2") {
    document.getElementById(
      "lista"
    ).innerHTML = `<h1>Lista de Compras</h1><br><br><h2>Frutas:</h2> <br> <p>${frutas}</p><br><br> <h2>Laticínios:</h2><br> ${laticinios}<br><br> <h2>Congelados:</h2> <br> <p>${congelados}</p><br><br> <h2>Doces:</h2> <br> <p>${doces}</p>`;
    encerrarPrograma = true;
  }
}
