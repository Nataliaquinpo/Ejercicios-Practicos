let texto = prompt("Hola Profe espero que te diviertas mucho revisando mis ejercicios");
texto = texto.toLowerCase();
const vocales = ['a', 'e', 'i', 'o', 'u'];
let contadorVocales = 0;
let contadorConsonantes = 0;
for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    
    // Ignorar espacios
    if (caracter === ' ') {
      continue;
    }
    
    if (vocales.includes(caracter)) {
      contadorVocales++;
    } else {
      contadorConsonantes++;
    }
  }
  console.log("Número de vocales:", contadorVocales);
console.log("Número de consonantes:", contadorConsonantes);
