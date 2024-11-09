"use strict";
//Importar modulos
import { readNumbers } from "../functions/index.js";

const runCode = () => {
  let product, total;
  //Datos de entrada
  const { numOne, numTwo, numThree } = readNumbers();
  //Proceso
  if (numOne !== undefined && numOne > 0) {
    product = numTwo * numThree;
    //Salida
    console.log(`El producto del número dos y el número tres es ${product}`);
  } else if (numOne !== undefined && numOne <= 0) {
    total = numTwo + numThree;
    //Salida
    console.log(`El total del número dos y el número tres es ${total}`);
  }
};

//Función anonima autoinvocada
(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
