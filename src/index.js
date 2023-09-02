import readline from "readline-sync";
import chalk from "chalk";
import { ordenador } from "./ordenador-propriedades-css.js";

function pedePropriedadeCss() {
  const entradaCss = readline.question(chalk.white.bgBlue.bold("Insira apenas uma propriedade CSS ou 'SAIR' para encerrar: "));

  if (entradaCss.toUpperCase() === "SAIR") {
    ordenador.mostrarPropriedadesCssOrdenadas();
    return false;
  }

  if (ordenador.validarEntradaCss(entradaCss) === true) {
    ordenador.adicionarPropriedadeCss(entradaCss);
  } else {
    console.log(chalk.red.bgYellow.bold("ATENÇÃO: entrada inválida! Insira apenas uma propriedade CSS ou digite 'SAIR'."));
  }

  pedePropriedadeCss();
}

pedePropriedadeCss();
