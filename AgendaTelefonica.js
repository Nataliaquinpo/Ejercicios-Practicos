let agendaTelefonica = {};
agendaTelefonica["Natalia Quintero"] = "3184855941";
agendaTelefonica["Maria Lopez"] = "3004561934";
agendaTelefonica["Carlos Herrera"] = "3014320975";
let nombreABuscar = "Natalia Quintero";
if (agendaTelefonica[nombreABuscar]) {
    console.log("El número de " + nombreABuscar + " es " + agendaTelefonica[nombreABuscar]);
} else {
    console.log("El contacto " + nombreABuscar + " no se encontró en la agenda.");
}
