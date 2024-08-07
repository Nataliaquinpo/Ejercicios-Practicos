let mensaje = prompt("Hola llego en 10 minutos por favor esperame, te invito a un helado");
let cantidadCaracteres = mensaje.length;
let palabras = mensaje.split(' ');
let cantidadPalabras = palabras.length;
let cantidadOraciones = mensaje.split(/[.!?]/).filter(oracion => oracion.trim().length > 0).length;
console.log("Cantidad de caracteres:", cantidadCaracteres);
console.log("Cantidad de palabras:", cantidadPalabras);
console.log("Cantidad de oraciones:", cantidadOraciones);