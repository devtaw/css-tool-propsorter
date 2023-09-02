import readline from "readline-sync";
import { ordenador } from "./ordenador-propriedades-css.js";

function pedePropriedadeCss() {
  const entradaCss = readline.question("Insira o nome de uma única propriedade CSS ou 'SAIR' para encerrar: ");

  if (entradaCss.toUpperCase() === "SAIR") {
    return false;
  }

  if (ordenador.validarEntradaCss(entradaCss) === true) {
    ordenador.adicionarPropriedadeCss(entradaCss);
  } else {
    console.log("A entrada está vazia/inválida. Insira uma propriedade CSS válida ou digite 'SAIR'.");
  }

  pedePropriedadeCss();
}

pedePropriedadeCss();
