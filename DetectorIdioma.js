let palabra = prompt("Hola");
palabra = palabra.toLowerCase();
const vocalesTildadas = ['á', 'é', 'í', 'ó', 'ú'];
let contadorVocalesTildadas = 0;

for (let i = 0; i < palabra.length; i++) {
  if (vocalesTildadas.includes(palabra[i])) {
    contadorVocalesTildadas++;
  }
}
let idiomaProbable = contadorVocalesTildadas > 0 ? "español" : "inglés";
console.log("La palabra es probable que esté en " + idiomaProbable + ".");