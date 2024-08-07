let nombre = prompt("Natalia");
let animalFavorito = prompt("Perro");
function capitalizarPalabra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }
  let animalCapitalizado = capitalizarPalabra(animalFavorito);
  let nombreSuperheroe = animalCapitalizado + " " + nombre;
  console.log("Tu nombre de superhéroe es:", nombreSuperheroe);
