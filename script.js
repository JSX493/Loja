const contas = [
  {
    nome: "Conta Top so com god",
    preco: "R$ 50,00",
    descricao: "Vem com espresso signora,odin din din dun{gold},cocofanto elefanto{bloodrot},x2 cocofanto elefanto,orcalero orcala{bloodrot},lucky block mythic,girafa celestra{diamond},girafa celetre{4 july},tralalero tralala",
  },
  {
    nome: "Conta Legal So com God",
    preco: "R$ 35,00",
    descricao: "Vem com: x3 TrebosTruzzo Turbo 3000 x1 gold,x2 cocofanto elefanto,x2 odin din din dun,tralalero tralala{gold},girafa celestre,Tigroligre frutonni.",
  },
];

const container = document.getElementById("contas-container");

contas.forEach((conta) => {
  const card = document.createElement("div");
  card.className = "conta";
  card.innerHTML = `
    <h2>${conta.nome}</h2>
    <p><strong>Nível:</strong> ${conta.nivel}</p>
    <p><strong>Preço:</strong> ${conta.preco}</p>
    <p>${conta.descricao}</p>
    <button onclick="comprar('${conta.nome}', '${conta.preco}')">Comprar</button>
  `;
  container.appendChild(card);
});

function comprar(nome, preco) {
  alert(`Você selecionou comprar: ${nome} por ${preco}.\nEntre em contato pelo Discord para finalizar
  Discord:jvbgamer - JSX`);
}
