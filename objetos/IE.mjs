import PJ from "../pessoas/PJ.mjs";

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado, dataRegistro) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
        this.#pj = null;
    }

    getNumero() {
        return this.#numero;
    }

    getEstado() {
        return this.#estado;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }

        return false;
    }

    getPJ() {
        return this.#pj;
    }
}


function IEfunc(numero, estado, dataRegistro) {
    let pj = null;

    return {
        getNumero() {
            return numero;
        },

        getEstado() {
            return estado;
        },

        getDataRegistro() {
            return dataRegistro;
        },

        setPJ(novoPJ) {
            if (novoPJ instanceof PJ) {
                pj = novoPJ;
                return true;
            }

            return false;
        },

        getPJ() {
            return pj;
        }
    };
}


const IEjson = {
    numero: "",
    estado: "",
    dataRegistro: null,
    pj: null,

    getNumero() {
        return this.numero;
    },

    getEstado() {
        return this.estado;
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(novoPJ) {
        if (novoPJ instanceof PJ) {
            this.pj = novoPJ;
            return true;
        }

        return false;
    },

    getPJ() {
        return this.pj;
    }
};


// Exportações
export default IEclss;
export { IEfunc, IEjson };
