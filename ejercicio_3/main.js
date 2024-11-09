"use strict";

const runCode = () => {
  //Declarar constantes
  const factor1 = 3;
  //Declarar e inizializar variables
  //Datos de entrada
  let counter = 1;
  let factor2 = 1;
  let multiple = 0;
  let accumulator = 0;
  //Proceso
  for (let i = 0; i <= 100; i) {
    multiple = factor1 * factor2;
    factor2 += 1;
    if (multiple < 100) accumulator += multiple;
    //Solo se imprimen las primeras 5 iteraciones
    //Salida
    if (counter <= 5) console.log(multiple);
    counter++;
    i = multiple;
  }
  console.log(
    `La suma de los números multiples de 3, de 3 hasta 100, es: ${accumulator}`
  );
};

//Función anonima autoinvocada
(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
