var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

//console.log (frutas);

// Agrega un elemento al array y devuelve el número de elementos del array
var masFrutas = frutas.push("Uvas", "Pera");
console.log (frutas);
console.log (masFrutas);

//Removes the last element from an array and returns it.
var ultimo = frutas.pop("Pera");
console.log (frutas);
console.log (ultimo);

//Inserts new elements at the start of an array.
var nuevaLongitud = frutas.unshift("Pera");
console.log (frutas);
console.log (nuevaLongitud);

//Recorrer arrays

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante){
    console.log (`Hola ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes (estudiantes[i]);
}

console.log("");

for (var estudiante of estudiantes) {
    saludarEstudiantes (estudiante);
}