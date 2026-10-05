import IEclss, { IEfunc, IEjson } from "./objetos/IE.mjs";
import PJ from "./pessoas/PJ.mjs";

function mostrarIE(ie) {
    console.log("Número:", ie.getNumero());
    console.log("Estado:", ie.getEstado());
    console.log(
        "Data de Registro:",
        ie.getDataRegistro().toLocaleString("pt-BR")
    );

    const pj = ie.getPJ();

    if (pj) {
        console.log("Pessoa Jurídica:");
        console.log("Nome:", pj.getNome());
        console.log("E-mail:", pj.getEmail());
        console.log("CNPJ:", pj.getCNPJ());
        console.log("Razão Social:", pj.getRazaoSocial());
    } else {
        console.log("Pessoa Jurídica: nenhuma associada");
    }

    console.log("----------------------------------------");
}


// ==========================================
// CRIANDO DUAS PESSOAS JURÍDICAS
// ==========================================

const empresa1 = new PJ();

empresa1.setNome("Empresa Alpha");
empresa1.setEmail("contato@alpha.com");
empresa1.setCNPJ("12345678000199");
empresa1.setRazaoSocial("Alpha Tecnologia LTDA");


const empresa2 = new PJ();

empresa2.setNome("Empresa Beta");
empresa2.setEmail("contato@beta.com");
empresa2.setCNPJ("98765432000188");
empresa2.setRazaoSocial("Beta Comércio LTDA");


// ==========================================
// DATA
// ==========================================

const data1 = new Date();
const data2 = new Date();


// ==========================================
// IE UTILIZANDO CLASSE
// ==========================================

const ieClasse = new IEclss(
    "110042490114",
    "SP",
    data1
);

console.log("Associando PJ à IEclss:");
console.log(ieClasse.setPJ(empresa1));


// ==========================================
// IE UTILIZANDO FUNÇÃO FÁBRICA
// ==========================================

const ieFabrica = IEfunc(
    "123456789",
    "MG",
    data2
);

console.log("Associando PJ à IEfunc:");
console.log(ieFabrica.setPJ(empresa2));


// ==========================================
// IE UTILIZANDO OBJETO LITERAL
// ==========================================

IEjson.numero = "987654321";
IEjson.estado = "RJ";
IEjson.dataRegistro = new Date();

console.log("Associando PJ à IEjson:");
console.log(IEjson.setPJ(empresa1));


// ==========================================
// TESTANDO OBJETO INVÁLIDO
// ==========================================

const objetoInvalido = {
    nome: "Empresa Inválida"
};

console.log("\n===== TESTE instanceof =====");

console.log(
    "IEclss com objeto inválido:",
    ieClasse.setPJ(objetoInvalido)
);

console.log(
    "IEfunc com objeto inválido:",
    ieFabrica.setPJ(objetoInvalido)
);

console.log(
    "IEjson com objeto inválido:",
    IEjson.setPJ(objetoInvalido)
);


// ==========================================
// ASSOCIANDO NOVAMENTE OBJETOS VÁLIDOS
// ==========================================

console.log("\n===== TESTE COM OBJETOS VÁLIDOS =====");

console.log(
    "IEclss:",
    ieClasse.setPJ(empresa1)
);

console.log(
    "IEfunc:",
    ieFabrica.setPJ(empresa2)
);

console.log(
    "IEjson:",
    IEjson.setPJ(empresa1)
);


// ==========================================
// RELATÓRIO DA IEclss
// ==========================================

console.log("\n========================================");
console.log("        IE - CLASSE");
console.log("========================================");

mostrarIE(ieClasse);


// ==========================================
// RELATÓRIO DA IEfunc
// ==========================================

console.log("\n========================================");
console.log("        IE - FUNÇÃO FÁBRICA");
console.log("========================================");

mostrarIE(ieFabrica);


// ==========================================
// RELATÓRIO DA IEjson
// ==========================================

console.log("\n========================================");
console.log("        IE - OBJETO LITERAL");
console.log("========================================");

mostrarIE(IEjson);


// ==========================================
// TESTE DOS GETTERS DA PJ
// ==========================================

console.log("\n========================================");
console.log("        PESSOAS JURÍDICAS");
console.log("========================================");

console.log("\n=== Pessoa Jurídica 1 ===");

console.log("Nome:", empresa1.getNome());
console.log("E-mail:", empresa1.getEmail());
console.log("CNPJ:", empresa1.getCNPJ());
console.log("Razão Social:", empresa1.getRazaoSocial());

console.log("\n=== Pessoa Jurídica 2 ===");

console.log("Nome:", empresa2.getNome());
console.log("E-mail:", empresa2.getEmail());
console.log("CNPJ:", empresa2.getCNPJ());
console.log("Razão Social:", empresa2.getRazaoSocial());
