"use strict";

import { isNull, isNum, isEmpty } from "./validations.js";

export const readNumbers = () => {
  //Declarar variables
  let numOne, numTwo, numThree;
  let value;
  let isNumber = false;
  let valueEmpty = false;
  let numNull = false;
  let options = ["primer", "segundo", "tercero"];
  //Datos de entrada y proceso
  for (let i = 0; i < 3; i++) {
    value = prompt(`Ingrese el ${options[i]} número: `);
    numNull = isNull(value);
    if (numNull) break;
    if (numNull === false) valueEmpty = isEmpty(value);
    if (valueEmpty === false) isNumber = isNum(value);
    if (isNumber) {
      if (i === 0) numOne = Number(value);
      if (i === 1) numTwo = Number(value);
      if (i === 2) numThree = Number(value);
    } else {
      i--;
    }
  }
  return { numOne, numTwo, numThree };
};
