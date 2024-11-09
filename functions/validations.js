export const isNum = (value) => {
  const numbers = "-0123456789";
  let bool;
  for (const element of value) {
    bool = numbers.includes(element) ? true : false;
    if (bool === false) {
      console.log("El valor ingresado, no es un número");
      break;
    }
  }

  //Salida
  return bool;
};

export const isEmpty = (value) => {
  let valueEmpty = value === "" ? true : false;
  if (valueEmpty)
    console.log("No ha ingresado ningun valor, vuelva a intentar");
  return valueEmpty;
};

export const isNull = (value) => {
  let numNull = value === null ? true : false;
  if (numNull) console.log("El usuario ha cancelado la ejecución");
  return numNull;
};

export const isRangeOk = (value, lower, higher, time) => {
  let rangeOk;
  if (time) {
    rangeOk = value > lower && value <= higher ? true : false;
  } else {
    rangeOk = value >= lower && value <= higher ? true : false;
  }
  if (rangeOk === false)
    console.log("El número ingresado no esta dentro del rango");
  return rangeOk;
};
