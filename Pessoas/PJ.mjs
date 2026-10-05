import Pessoa from "./Pessoa.js";

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor(nome = "", email = "", cnpj = "", razaoSocial = "") {
        super(nome, email);

        this.#cnpj = "";
        this.#razaoSocial = "";

        this.setCNPJ(cnpj);
        this.setRazaoSocial(razaoSocial);
    }

    setCNPJ(cnpj) {
        if (typeof cnpj === "string" && cnpj.length === 14) {
            this.#cnpj = cnpj;
            return true;
        }

        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (
            typeof razaoSocial === "string" &&
            razaoSocial.trim() !== ""
        ) {
            this.#razaoSocial = razaoSocial;
            return true;
        }

        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}
