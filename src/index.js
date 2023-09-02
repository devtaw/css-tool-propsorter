import readline from "readline-sync";

function pedePropriedadeCss() {
  const entradaCss = readline.question("Insira o nome de uma única propriedade CSS ou 'SAIR' para encerrar: ");

  if (entradaCss.toUpperCase() === "SAIR") {
    return false;
  }

  pedePropriedadeCss();
}

pedePropriedadeCss();
