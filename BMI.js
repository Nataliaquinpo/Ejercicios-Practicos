let peso = 55; // peso en kilogramos
let altura = 1.60; // altura en metros
let bmi = peso / (altura * altura);
console.log("El BMI calculado es: " + bmi);
if (bmi < 18.5) {
    console.log("Bajo peso");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Peso normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}
