function fDividir (num1,num2) {    
    return(num1/num2);
};

let numero1 = 0;
let numero2 = 0;

do {

    numero1 = parseInt(prompt("Escriba un número:"));
    numero2 = parseInt(prompt("Escriba otro número:"));

    if (numero2 == 0) {break};

    alert(fDividir(numero1,numero2));

} while (numero2 != 0);
