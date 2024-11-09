"use strict";

import { isNull, isNum, isEmpty, isRangeOk } from "./validations.js";

export const readNotes = () => {
  //Declarar variables
  let numOne, numTwo, numThree, numFour, numFive;
  let value;
  let counter = 1;
  let isNumber = false;
  let numNull = false;
  let valueEmpty = false;
  let isOk = false;
  let options = ["primera", "segunda", "tercera", "cuarta", "quinta"];
  while (counter < 6) {
    value = prompt(`Ingrese la ${options[counter - 1]} nota del alumno: `);
    numNull = isNull(value);
    if (numNull) break;
    if (numNull === false) valueEmpty = isEmpty(value);
    if (valueEmpty === false) isNumber = isNum(value);
    if (isNumber) isOk = isRangeOk(value, 0, 10);
    if (isNumber && isOk) {
      if (counter === 1) numOne = Number(value);
      if (counter === 2) numTwo = Number(value);
      if (counter === 3) numThree = Number(value);
      if (counter === 4) numFour = Number(value);
      if (counter === 5) numFive = Number(value);
      counter++;
    }
  }
  return [numOne, numTwo, numThree, numFour, numFive];
};
