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

const generarTodasLasCombinaciones = () => {
  let combinaciones = [];

  for (let i = 0; i < frases[0].length; i++) {
    for (let j = 0; j < frases[1].length; j++) {
      for (let k = 0; k < frases[2].length; k++) {
        let combinacionParcial = frases[0][i] + frases[1][j] + frases[2][k];

        for (let l = 0; l < frases[3].length; l++) {
          combinaciones.push(`${combinacionParcial}${frases[3][l]}`);
        }
      }
    }
  }

  return combinaciones;
};

const todasLasCombinaciones = generarTodasLasCombinaciones();
todasLasCombinaciones.forEach(dominio => console.log(`${dominio}`));
