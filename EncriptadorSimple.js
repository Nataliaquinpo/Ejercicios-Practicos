let mensaje = prompt("Esta información es secreta");
function encriptarMensaje(mensaje) {
  let mensajeEncriptado = '';
  for (let i = 0; i < mensaje.length; i++) {
    let char = mensaje[i];
    if (char >= 'a' && char <= 'z') {
      mensajeEncriptado += String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
    } else if (char >= 'A' && char <= 'Z') {
      // Encriptar letra mayúscula
      mensajeEncriptado += String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
    } else {
      mensajeEncriptado += char;
    }
  }
  return mensajeEncriptado;
}
let mensajeEncriptado = encriptarMensaje(mensaje);
console.log("Mensaje encriptado:", mensajeEncriptado);
