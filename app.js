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

    exibirTextoNaTela('#listaAmigos', msgEscolhido);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}