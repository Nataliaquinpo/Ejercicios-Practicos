let contraseña = prompt("3St3ban1");
let esValida = true;
let errores = [];
if (contraseña.length < 8) {
    esValida = false;
    errores.push("La contraseña debe tener al menos 8 caracteres de longitud.");
  }
  if (!/[A-Z]/.test(contraseña)) {
    esValida = false;
    errores.push("La contraseña debe contener al menos una letra mayúscula.");
  }
  if (!/[a-z]/.test(contraseña)) {
    esValida = false;
    errores.push("La contraseña debe contener al menos una letra minúscula.");
  }
  if (!/[0-9]/.test(contraseña)) {
    esValida = false;
    errores.push("La contraseña debe contener al menos un número.");
  }
  if (esValida) {
    console.log("Contraseña válida.");
  } else {
    console.log("Contraseña no válida. Razones:");
    errores.forEach(error => console.log(error));
  }