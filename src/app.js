/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const resultadoElemento = document.getElementById("resultado");
const botonGenerar = document.getElementById("boton-generar");

const actualizarResultado = () => {
  resultadoElemento.innerHTML = generarDominio();
};

window.onload = () => {
  actualizarResultado();
};

botonGenerar.addEventListener("click", actualizarResultado);

const frases = [
  ["the", "our"],
  ["great", "big"],
  ["jogger", "racoon"],
  [".com", ".es", ".net"]
];

const obtenerIndiceAleatorio = arr => Math.floor(Math.random() * arr.length);

const generarDominio = () => {
  let partesDominio = [];
  for (let i = 0; i < frases.length; i++) {
    partesDominio.push(frases[i][obtenerIndiceAleatorio(frases[i])]);
  }
  return partesDominio.join("");
};
