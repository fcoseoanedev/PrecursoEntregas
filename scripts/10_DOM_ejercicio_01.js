/* 
    1.	Pide por prompt un número. Recójelo en una variable. 
    Pinta un párrafo en el html en el que inicialmente se mostrará ese valor, 
    y un botón debajo. El botón ejecutará una función que recibirá ese número 
    como argumento y lo sumará al número inicial.  
*/


// 
let numero = parseInt(prompt("Informe un número:"));
document.querySelector("#num").innerHTML = numero;

let button = document.querySelector("#btn");

button.addEventListener("click", function () {
    addNum(numero);
  });

  // Esta es la función que va a ejecutarse en el addEventListener.
function addNum(number) {  
    p = document.querySelector("#num");
    p.innerHTML = parseInt(p.innerHTML) + number;
};
  
