

/*
 2.	Crea un html con un párrafo y un botón. El párrafo tendrá dentro la frase 
“la variable está en false”. Cuando hagamos click en el botón, el valor de la variable 
cambiará a true y el párrafo tendrá dentro la frase “la variable está en true”. 
*/

let variable = "true"
document.querySelector("#mensaje").innerHTML = "La variable está en " + variable;


let button = document.querySelector("#btn");
button.addEventListener("click", function () {
    cambiarValor();
  });

  // Esta es la función que va a ejecutarse en el addEventListener.
function cambiarValor() {  
    if (variable == "true") { 
        variable = "false"
    } else {
        variable = "true"
    };
    document.querySelector("#mensaje").innerHTML = "La variable está en " + variable;
};