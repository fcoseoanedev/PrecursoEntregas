const euro = "Euros";
const yen = "Yenes";
const dolar = "Dolares";
const libra = "Libras";
const crLF = "<br>";

function fConvertir (importe, moneda) {    

    switch (moneda) {
        case libra:
            importe = importe * 0.86;
            break;
        case yen:
            importe = importe * 129.852;
            break;
        case dolar:          
            importe = importe * 1.28611;
            break;
        default:
            importe = importe * 1;
    };

    document.write(moneda + ": " + importe + crLF);
};

let importe = parseInt(prompt("Introduzca un importe en Euros:"));

document.write("Importe introducido: " + importe + " € " + crLF + crLF);

fConvertir(importe,dolar);
fConvertir(importe,yen);
fConvertir(importe,libra);
