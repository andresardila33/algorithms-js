"use strict";

const runCode = () => {
  //Datos de entrada
  //Declarar constantes
  const base = 2;
  //Declarar variables
  let exponent = 1;
  let power = 0;
  //Proceso
  console.log("Las potencias enteras de 2 que son menores que 100, son:");
  for (let i = 1; i <= 100; i) {
    power = base ** exponent;
    exponent += 1;
    //Salida
    if (power <= 100) console.log(power);
    i = power;
  }
};

//Función anonima autoinvocada
(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
