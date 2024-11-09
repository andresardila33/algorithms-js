"use strict";
//Datos de entrada
//Importar modulos
import { readNumbers } from "../functions/index.js";

window.onload = () => {
  let btn = document.getElementById("buttom");
  btn.onclick = runCode;
};
//Proceso
const runCode = () => {
  const { numOne, numTwo, numThree } = readNumbers();

  if (numOne !== undefined) {
    if (numOne === numTwo + numThree) {
      //Salida
      console.log(`El primer número es la suma del segundo y el tercero`);
    } else if (numTwo === numOne + numThree) {
      //Salida
      console.log(`El segundo número es la suma del primero y el tercero`);
    } else if (nunumThree === numOne + numTwo) {
      //Salida
      console.log(`El tercer número es la suma del primero y el segundo`);
    } else {
      //Salida
      console.log(`Ningun número coincide con la suma de sus adyacentes`);
    }
  }
};
