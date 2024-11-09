"use strict";

import { isNum, isNull, isEmpty } from "../functions/index.js";

const runCode = () => {
  //Declarar constants
  const constant1 = 1.8;
  const constant2 = 32;
  //Declarar variables
  let celsius;
  let fahrenheit;
  let numNull = false;
  let isNumber = false;
  let numEmpty = false;
  let value;
  //Entrada de datos
  while (isNumber === false) {
    value = prompt(`Ingrese la temperatura en grados Celsius °C: `);
    numNull = isNull(value);
    if (numNull) break;
    if (numNull === false) numEmpty = isEmpty(value);
    if (numEmpty === false) isNumber = isNum(value);
    if (isNumber) celsius = value;
  }
  //Proceso
  if (celsius !== undefined) {
    fahrenheit = constant1 * celsius + constant2;
    //Salida
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
  }
};

(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
