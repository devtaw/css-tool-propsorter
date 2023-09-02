import readline from "readline-sync";
import chalk from "chalk";
import { ordenador } from "./ordenador-propriedades-css.js";

function pedePropriedadeCss() {
  const entradaCss = readline.question(chalk.blue("Insira uma única propriedade CSS ou 'SAIR' para encerrar: "));

  if (entradaCss.toUpperCase() === "SAIR") {
    return false;
  }

  if (ordenador.validarEntradaCss(entradaCss) === true) {
    ordenador.adicionarPropriedadeCss(entradaCss);
  } else {
    console.log(chalk.red("ATENÇÃO: entrada inválida! Insira uma única propriedade CSS ou digite 'SAIR'."));
  }

  pedePropriedadeCss();
}

pedePropriedadeCss();
