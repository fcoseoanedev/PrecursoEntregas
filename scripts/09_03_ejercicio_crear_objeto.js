let TipoMotor = {
  Cilindros: 4, 
  Capacidad: 2.2
};

let coche = {
  Color: "rojo", 
  Marca: "Ford",
  Modelo: "Focus",
  Motor: TipoMotor
};


console.log("Propiedades del coche:");
console.log("Color : " + coche.Color);
console.log("Marca : " + coche.Marca);
console.log("Modelo : " + coche.Modelo);
console.log("Motor:");
console.log("Cilindros : " + coche.Motor.Cilindros);
console.log("Cilindros : " + coche.Motor.Capacidad);


