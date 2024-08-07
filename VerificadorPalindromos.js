let texto = prompt("A la 1 a las 2 y a las 3 te voy a encontrar");
let textoProcesado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
let textoInvertido = textoProcesado.split('').reverse().join('');
if (textoProcesado === textoInvertido) {
    console.log("La cadena de texto es un palíndromo");
  } else {
    console.log("La cadena de texto no es un palíndromo");
  }
