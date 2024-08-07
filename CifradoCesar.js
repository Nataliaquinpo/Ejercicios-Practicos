let mensaje = "Hola Profe";
let desplazamiento = 3;
function cifrarCesar(mensaje, desplazamiento) {
    mensaje = mensaje.toLowerCase();  // Convertimos a minúsculas para simplificar
    let mensajeCifrado = "";
  
    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i];
  
      if (caracter.match(/[a-z]/)) {
        let codigoAscii = caracter.charCodeAt(0);
        let nuevoCodigoAscii = ((codigoAscii - 97 + desplazamiento) % 26) + 97;
        mensajeCifrado += String.fromCharCode(nuevoCodigoAscii);
      } else {
        mensajeCifrado += caracter;
      }
    }
  
    return mensajeCifrado;
  }