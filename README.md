# Ferramenta de Organização de Propriedades CSS

Esta é uma ferramenta simples de linha de comando que permite aos usuários inserir propriedades CSS e organizá-las em ordem alfabética. Isso facilita a localização e a edição de propriedades em arquivos CSS complexos.

## Como Executar

Siga estas etapas para executar a ferramenta em sua máquina:

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/devtaw/css-tool-propsorter.git
   ```

2. Instale as dependências do projeto:

```
cd css-tool-propsorter
 npm install
```

3. Execute o projeto:

```
npm start
```

## Exemplos:

### Requisição (Entrada do Usuário):

- O usuário executa o programa a partir da linha de comando usando node src/index.js.
- O programa solicita ao usuário que insira uma propriedade CSS ou digite 'SAIR' para encerrar.
- O usuário insere uma propriedade CSS, por exemplo: background-color.

### Resposta (Sucesso):

- O programa verifica se a entrada do usuário é válida, neste caso, uma propriedade CSS válida.
- Se for válido, o programa adiciona a propriedade à lista de propriedades CSS.
- O programa continua solicitando mais entradas até que o usuário digite 'SAIR'.
- Quando o usuário digita 'SAIR', o programa ordena a lista de propriedades e a imprime no console em ordem alfabética.

### Resposta (Erro):

- Se o usuário inserir uma entrada inválida, como um valor não alfanumérico, o programa exibirá uma mensagem de erro no console.
- Por exemplo: ATENÇÃO: entrada inválida! Insira apenas uma propriedade CSS ou digite 'SAIR'.

## Requisitos

Para executar este projeto, você precisa ter o seguinte instalado em sua máquina:

- Node.js (versão X.X.X)
- npm (gerenciador de pacotes do Node.js)

## Decisões tomadas:

- Utilização de POO para isolar a principal lógica da operação;
- Criações de funções separadas por funcionalidades seguindo o principio Single Responsibility.
- Utilização da biblioteca `chalk` para evidenciar mensagens de erro e prompt de saída.
- Utilização da biblioteca `readline-sync` para a leitura da entrada do usuário.
- Utilização de função recursiva no `index.js` para lógica de leitura do prompt do usuário.
- Separação da classe criada em um módulo separado propiciando uma melhor organização do código e separação de responsabilidades.
- Utilização de `regex` para validação de entrada de texto.
- Foi utilizada uma estrategia de transformar a entrada em maiusculo para realizar a comparação de saíde do sistema e a ordenação. Na saída, optei por utilizar uma estrategia de transformar a saída em minusculo seguindo os padrões de sintaxe CSS.
- Utilização dos métodos:
  - `.trim()`: para remover possiveis espaços em branco
  - `.push()`: para adicionar propriedades na lista
  - `.sort()`: para ordenadar as propriedades
  - `.forEach()`: para imprimir a lista com as propriedades em cada linha.

## Bibliotecas Utilizadas

Este projeto faz uso das seguintes bibliotecas:

- [readline-sync](https://www.npmjs.com/package/readline-sync): Para interagir com o usuário na linha de comando.
- [chalk](https://www.npmjs.com/package/chalk): Para estilizar a saída do console com cores.

Certifique-se de ter essas bibliotecas instaladas antes de executar o projeto.

## Links Externos e Referências

- [Documentação do Node.js](https://nodejs.org/en/docs/)
- [Documentação do readline-sync](https://www.npmjs.com/package/readline-sync)
- [Documentação do chalk](https://www.npmjs.com/package/chalk)
- [Exemplo de uso do Node.js para CLI](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
