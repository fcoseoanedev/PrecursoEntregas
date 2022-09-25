function fTamaño (num1,num2) {
    let retorno = "false";
    if (num1 > num2) {
        retorno = "true";
    };
    return(retorno);
};

const CrLf = "<br>";

let numero1 = parseInt(prompt("Escriba un número:"));
let numero2 = parseInt(prompt("Escriba otro número:"));

document.write("Número 1: " + numero1 + CrLf);
document.write("Número 2: " + numero2 + CrLf);

if (fTamaño(numero1, numero2) == "true") {
    document.write("El primer número es mas grande" + CrLf)
} else {
    document.write("El primer número no es mas grande" + CrLf)
};
