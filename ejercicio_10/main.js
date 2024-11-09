"use strict";

const runCode = () => {
  //Declarar constantes y variables
  //Datos de entrada
  let accumulator;
  let options = ["primera", "segunda", "tercera", "cuarta"];

  const matriz = [[], [], []];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      matriz[i][j] = Math.floor(Math.random() * 10);
    }
  }
  console.table(matriz);
  //Proceso
  for (let i = 0; i < 3; i++) {
    accumulator = 0;
    for (let j = 0; j < 4; j++) {
      accumulator += matriz[i][j];
    }
    //Salida
    console.log(
      `La suma de los números de la ${options[i]} fila es: ${accumulator}`
    );
  }

  for (let j = 0; j < 4; j++) {
    accumulator = 0;
    for (let i = 0; i < 3; i++) {
      accumulator += matriz[i][j];
    }
    //Salida
    console.log(
      `La suma de los números de la ${options[j]} columna es: ${accumulator}`
    );
  }
};

(() => {
  const btn = document.getElementById("button");
  btn.onclick = runCode;
})();
