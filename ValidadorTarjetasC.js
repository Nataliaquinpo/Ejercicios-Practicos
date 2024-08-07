function validarTarjeta(numero) {
    let digitos = numero.toString().split('').map(Number);
    for (let i = digitos.length - 2; i >= 0; i -= 2) {
      let doble = digitos[i] * 2;
      if (doble > 9) {
        doble = Math.floor(doble / 10) + (doble % 10);
      }
      digitos[i] = doble;
    }
    let sumaTotal = digitos.reduce((acc, val) => acc + val, 0);
    return sumaTotal % 10 === 0;
  }
  let tarjeta1 = 4532015112830366; // Válida
  let tarjeta2 = 6011514433546201; // No válida
  
  console.log(validarTarjeta(tarjeta1)); // true
  console.log(validarTarjeta(tarjeta2)); // false