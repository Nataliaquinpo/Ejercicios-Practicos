function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
let dado1 = lanzarDado();
let dado2 = lanzarDado();
let suma = dado1 + dado2;
console.log("El valor del dado 1 es: " + dado1);
console.log("El valor del dado 2 es: " + dado2);
console.log("La suma de los valores de los dados es: " + suma);
