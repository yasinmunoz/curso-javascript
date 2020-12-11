// Funciones declarativas

function miFuncion() {
    return 3;
}

miFuncion();

function saludar (nombre) {
    console.log ("Hola "+nombre);
    // console.log (`Hola ${nombre}`);
}

saludar ("Diego");

// Funciones de expresión o funciones anónimas

var miFuncion = function(a,b) {
    return a + b;
}

miFuncion();

var nombre = function (nombre){
    console.log (`Hola ${nombre}`);
}

nombre ("Diego");

/* 

A las funciones declarativas se les aplica hoisting y a las de expresión no, ya que el hoisting solo se aplica en las palabras reservadas var y function

*/