// Cardápio da lanchonete: id do campo de quantidade, nome e preço
const cardapio = [
    { id: "qtdXBurguer", nome: "X-Burguer", preco: 18 },
    { id: "qtdPastel", nome: "Pastel", preco: 8 },
    { id: "qtdCoxinha", nome: "Coxinha", preco: 7 },
    { id: "qtdSuco", nome: "Suco natural", preco: 6 }
];

const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", calcularPedido);

function calcularPedido() {
    // 1. Monta a lista de itens escolhidos (quantidade maior que zero)
    const itensEscolhidos = [];
    for (let i = 0; i < cardapio.length; i++) {
        
        // Adicionei NUMBER, pois a taxa vinha como texto
        const quantidade = Number(document.getElementById(cardapio[i].id).value);        
        if (quantidade > 0) {
            itensEscolhidos.push({
                nome: cardapio[i].nome,
                quantidade: quantidade,
                valor: quantidade * cardapio[i].preco
            });
        }
    }

    // 2. Mostra os itens no resumo e calcula o subtotal
    const lista = document.getElementById("listaItens");
    lista.innerHTML = "";
    let subtotal = 0;
    // removi o -1, pois estava desconsiderando o Item suco no cálculo
    for (let i = 0; i < itensEscolhidos.length; i++) {
        const item = itensEscolhidos[i];
        lista.innerHTML += "<li>" + item.quantidade + "x " + item.nome + ": R$ " + item.valor + "</li>";
        subtotal = subtotal + item.valor;
    }

    // 3. Soma a taxa de entrega

    // Adicionei NUMBER, pois a taxa vinha como texto
    const taxa = Number(document.getElementById("taxaEntrega").value);
    const total = subtotal + taxa;

    document.getElementById("subtotal").textContent = "R$ " + subtotal;
    document.getElementById("total").textContent = "R$ " + total;
}
