let nombre = "Natalia"; // nombre
let apellido = "Quintero"; // apellido
let parteNombre = nombre.substring(0, 3);
let parteApellido = apellido.substring(0, 3);
let numeroAleatorio = Math.floor(Math.random() * 1000);
let nombreUsuario = parteNombre + parteApellido + numeroAleatorio;
console.log("El nombre de usuario generado es: " + nombreUsuario);