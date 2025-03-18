<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Amigo Secreto</h1>
  <p>
    Este projeto é uma aplicação web simples que simula um sorteio de "Amigo Secreto". Através da interface, o usuário pode inserir nomes de amigos, visualizar a lista dos nomes adicionados e, ao acionar o sorteio, um dos nomes é escolhido aleatoriamente para ser o "amigo secreto".
  </p>

  <h2>Funcionalidades</h2>
  <ul>
    <li>
      <strong>Adicionar Amigos:</strong> Permite ao usuário inserir os nomes dos participantes, que são armazenados e exibidos na tela.
    </li>
    <li>
      <strong>Listagem de Nomes:</strong> A lista de amigos adicionados é apresentada dinamicamente na página.
    </li>
    <li>
      <strong>Sorteio Aleatório:</strong> Ao acionar o botão de sorteio, um nome é selecionado aleatoriamente da lista.
    </li>
  </ul>

  <h2>Estrutura dos Arquivos</h2>
  <ul>
    <li>
      <strong>index.html:</strong> Estrutura principal da página, contendo o cabeçalho com o título e uma imagem ilustrativa. Possui também uma seção para entrada dos nomes dos amigos, botões para adicionar nomes e para realizar o sorteio, além de elementos para exibição da lista e do resultado.
    </li>
    <li>
      <strong>app.js:</strong> Contém a lógica JavaScript do projeto.
      <ul>
        <li>Um array armazena os nomes dos amigos.</li>
        <li>A função <code>adicionarAmigo()</code> captura o nome digitado, adiciona ao array e atualiza a lista na tela.</li>
        <li>A função <code>sortearAmigo()</code> escolhe um dos nomes de forma aleatória e exibe o resultado.</li>
        <li>Funções auxiliares tratam da exibição do texto na tela e da limpeza do campo de entrada.</li>
      </ul>
    </li>
    <li>
      <strong>style.css:</strong> Define o estilo visual da aplicação.
      <ul>
        <li>São utilizadas variáveis CSS para cores e personalização.</li>
        <li>O layout é responsivo e utiliza fontes do Google Fonts ("Inter" e "Merriweather") para uma melhor apresentação.</li>
        <li>Estilização dos botões, campos de entrada, listas e outros elementos garante uma interface moderna e intuitiva.</li>
      </ul>
    </li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>HTML5:</strong> Estrutura semântica e responsiva.</li>
    <li><strong>CSS3:</strong> Estilização com uso de variáveis, layout flexível e integração com fontes externas.</li>
    <li><strong>JavaScript:</strong> Lógica para manipulação do DOM, armazenamento dos nomes e sorteio aleatório.</li>
  </ul>

  <h2>Como Utilizar</h2>
  <ol>
    <li>
      <strong>Clonar o Repositório:</strong>
      <pre><code>git clone https://github.com/wconrado/Challenge-amigo-secreto.git</code></pre>
    </li>
    <li>
      <strong>Abrir o Projeto:</strong> Abra o arquivo <code>index.html</code> no seu navegador preferido.
    </li>
    <li>
      <strong>Adicionar Nomes:</strong> Digite o nome de um amigo no campo de entrada e clique no botão "Adicionar". Os nomes serão listados na página.
    </li>
    <li>
      <strong>Sortear Amigo Secreto:</strong> Após inserir todos os nomes, clique no botão "Sortear amigo" para ver qual amigo foi selecionado de forma aleatória.
    </li>
  </ol>
</body>
</html>
