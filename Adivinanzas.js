const readlineSync = require('readline-sync');
let numeroSecreto = Math.floor(Math.random() * 10) + 1;// Generar un número aleatorio entre 1 y 10
let suposicionJugador = 0; // Valor inicial, será actualizado en cada intento
let intentos = 3;

for (let i = 0; i < intentos; i++) {
    suposicionJugador = parseInt(readlineSync.question("Adivina el número (entre 1 y 10): "));

    if (suposicionJugador === numeroSecreto) {
        console.log("¡Felicidades! Adivinaste el número.");
        break;
    } else if (suposicionJugador > numeroSecreto) {
        console.log("Tu suposición es demasiado alta.");
    } else if (suposicionJugador < numeroSecreto) {
        console.log("Tu suposición es demasiado baja.");
    }

    if (i === intentos - 1) {
        console.log("Has perdido. El número era " + numeroSecreto);
    }
}

