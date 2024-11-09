"use strict";

import {
  isNum,
  isNull,
  isEmpty,
  isRangeOk,
  convTimeFormat,
} from "../functions/index.js";

const runCode = () => {
  //Declarar variables
  let hour;
  let numNull = true;
  let numEmpty = true;
  let isNumber = false;
  let isOk = false;
  let time = true;
  //Datos de entrada y validaciones
  while (isNumber === false || isOk === false) {
    hour = prompt(`Ingrese la hora en formato de 24 hours: `);
    numNull = isNull(hour);
    if (numNull) break;
    if (numNull === false) numEmpty = isEmpty(hour);
    if (numEmpty === false) isNumber = isNum(hour);
    if (isNumber) isOk = isRangeOk(Number(hour), 0, 24, time);
  }
  //Proceso
  if (hour !== null) {
    hour = Number(hour);
    let message = convTimeFormat(hour);
    //Salida
    console.log(message);
  }
};

(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
