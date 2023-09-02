class OrdenadorPropriedadesCss {
  propriedadesCss;

  constructor() {
    this.propriedadesCss = [];
  }

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

  adicionarPropriedadeCss(propriedadeCss) {
    this.propriedadesCss.push(propriedadeCss.toUpperCase());
  }

  mostrarPropriedadesCssOrdenadas() {
    this.propriedadesCss.sort();
    this.propriedadesCss.forEach((propriedadesCss) => console.log(propriedadesCss.toLowerCase()));
  }
}

const ordenador = new OrdenadorPropriedadesCss();

export { ordenador };
