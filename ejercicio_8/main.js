"use strict";

import { isNull, isEmpty, reverseOrder } from "../functions/index.js";

const runCode = () => {
  //Declarar variables
  let charNull = false;
  let charEmpty = false;
  let word;
  const vector = [];
  //Datos de entrada
  for (let i = 0; i < 5; i++) {
    word = prompt("Escriba una palabra: ");
    charNull = isNull(word);
    if (charNull) break;
    if (charNull === false) charEmpty = isEmpty(word);
    if (charEmpty) i--;
    if (charEmpty === false) vector[i] = word;
  }
  if (word !== null) {
    //Proceso
    let reverseVector = reverseOrder(vector);
    //Salida
    console.log(`El vector original es: [${vector}]`);
    console.log(`El vector en orden invertido es: [${reverseVector}]`);
  }
};

(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
