/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let elementos = {
  quien: ["mi perro", "mi abuela", "Thor", "Piolín"],
  accion: ["se comió", "se llevó", "vendió", "perdió"],
  que: ["mi tarea", "mis llaves", "mi auto", "mi bicicleta"],
  cuando: [
    "ayer.",
    "justo cuando iba saliendo.",
    "a la hora de almuerzo.",
    "durante mi siesta."
  ]
};
let excusa = () => {
  let mentira =
    elementos.quien[Math.floor(Math.random() * 4)] +
    " " +
    elementos.accion[Math.floor(Math.random() * 4)] +
    " " +
    elementos.que[Math.floor(Math.random() * 4)] +
    " " +
    elementos.cuando[Math.floor(Math.random() * 4)];

  return mentira;
};
window.onload = function() {
  document.querySelector("#excusa").innerHTML = excusa();
};
