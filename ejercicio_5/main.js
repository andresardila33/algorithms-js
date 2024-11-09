"use strict";

const runCode = () => {
  //Datos de entrada
  //Declarar y asignar variables
  let accumulator = 0;
  //Proceso
  for (let i = 50; i <= 200; i++) {
    if (i % 2 === 0) accumulator += i;
  }
  //Salida
  console.log(`La suma de los números pares de 50 a 200, es: ${accumulator}`);
};

(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
