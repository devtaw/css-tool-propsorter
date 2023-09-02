class OrdenadorPropriedadesCss {
  constructor() {}

  validarEntradaCss(entradaCss) {
    const entradaEhString = /^[a-zA-Z\-]+$/.test(entradaCss);

    if (entradaEhString === false) {
      return false;
    }

    if (entradaCss.trim() === "") {
      return false;
    }

    return true;
  }
}

const ordenador = new OrdenadorPropriedadesCss();

export { ordenador };
