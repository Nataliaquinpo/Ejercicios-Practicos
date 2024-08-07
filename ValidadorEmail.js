let correoElectronico = "nataliaquinpo@gmail.com";
function esCorreoValido(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
if (esCorreoValido(correoElectronico)) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}
