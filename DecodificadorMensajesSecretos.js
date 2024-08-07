let mensajeCodificado = "Mi Perro Mono Tiene Hambre";

// Paso 2: Crear un diccionario de palabras codificadas y sus correspondientes palabras descodificadas
let diccionario = {
  "Perro": "agente",
  "Mono": "secreto",
  "Hambre": "misión"
};
function decodificarMensaje(mensaje, diccionario) {
  let palabras = mensaje.split(' ');
  for (let i = 0; i < palabras.length; i++) {
    if (diccionario[palabras[i]]) {
      palabras[i] = diccionario[palabras[i]];
    }
  }
  return palabras.join(' ');
}
let mensajeDescodificado = decodificarMensaje(mensajeCodificado, diccionario);
console.log("Mensaje descodificado:", mensajeDescodificado);
