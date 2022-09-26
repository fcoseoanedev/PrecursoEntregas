
/*
    3.	Con las imágenes del juego de magic (anverso y reverso) 
        haz una página que muestre primero el reverso de la carta. 
        Cuando se haga click en esa imagen, desaparecerá y en su lugar 
        aparecerá el anverso. Si hacemos click en el anverso, 
        éste desaparecerá y aparecerá el reverso. Así hasta que nos aburramos. 
*/

let carta = 0;

let button = document.querySelector("#carta");
button.addEventListener("click", function () {
    cambiarImagen();
  });

  // Esta es la función que va a ejecutarse en el addEventListener.
function cambiarImagen() {  

    let imagen = "";

    if (carta == 0) {
        carta = 1
        imagen = ".\\public\\reverso.png"
    } else {
        carta = 0 
        imagen = ".\\public\\anverso.jpg"
    };

    document.querySelector("#carta").src = imagen;
};