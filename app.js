//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaDeAmigos = [];

function adicionarAmigo() {
    ListaDeAmigos.push(document.querySelector('input').value);
    exibirTextoNaTela('#listaAmigos', ListaDeAmigos);
    limparCampo();
}

function sortearAmigo() {
    let numeroLimite = ListaDeAmigos.length;
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite);
    let msgEscolhido = `O amigo secreto sorteado é: ${ListaDeAmigos[numeroEscolhido]}`;
    exibirTextoNaTela('#resultado', msgEscolhido);
}

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    // Se for um array, transforma cada item em um <li>
    if (Array.isArray(texto)) {
        campo.innerHTML = texto.map(nome => `<li>${nome}</li>`).join('');
    } else {
        // Se for uma string, cria um único <li>
        const limpa = document.querySelector('#listaAmigos');
        limpa.innerHTML = '';
        campo.innerHTML = `<li>${texto}</li>`;
    }
}

function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}