"use strict";

import { readNotes } from "../functions/index.js";

window.onload = function () {
  let btn = document.getElementById("buttom");
  btn.onclick = runCode;
};
const runCode = () => {
  let avarege;
  let accumulator = 0;
  const notes = readNotes();
  if (notes[0] !== undefined) {
    //Proceso
    for (let i = 0; i < 5; i++) {
      accumulator += notes[i];
    }
    //Todas las notas
    console.log(`Las notas del alumno son: [${notes}]`);
    //Nota promedio
    avarege = accumulator / 5;
    console.log(`El promedio de las notas del alumno es: ${avarege}`);
    //Ordenar array
    notes.sort((a, b) => {
      return a - b;
    });
    console.log(notes);

    //Nota más alta
    console.log(`La nota más alta del alumno es: ${notes[4]}`);
    //Nota más baja
    console.log(`La nota más baja del alumno es: ${notes[0]}`);
  }
};
