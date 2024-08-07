let frase = prompt("Hijo te amo");
let palabras = frase.split(' ');
let iniciales = palabras.map(palabra => palabra.charAt(0));
let acronimo = iniciales.join('').toUpperCase();
console.log("El acrónimo es:", acronimo);