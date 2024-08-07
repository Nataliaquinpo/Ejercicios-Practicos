let frase = prompt("Hola Profe");
let palabras = frase.split(' ');
for (let i = 0; i < palabras.length; i++) {
    palabras[i] = invertirPalabra(palabras[i]);
  }
  function invertirPalabra(palabra) {
    return palabra.split('').reverse().join('');
  }
  let fraseInvertida = palabras.join(' ');
  console.log("Frase con palabras invertidas:", fraseInvertida);