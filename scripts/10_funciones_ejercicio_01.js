function writeHola (veces) {
    for (i=0 ;i<veces;i++) {
        document.write("Hola" + "<br>");
    }    
};
writeHola(prompt("Escriba cuantos saludos quiere"));