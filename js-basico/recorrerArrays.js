var articulos = [
    {nombre: "Bici", coste: 3000},
    {nombre: "TV", coste: 2500},
    {nombre: "Libro", coste: 320},
    {nombre: "Celular", coste: 10000},
    {nombre: "Laptop", coste: 20000},
    {nombre: "Teclado", coste: 500},
    {nombre: "Audífonos", coste: 1700}
];

//método filter: filtrar artículos
var articulosFiltrados = articulos.filter(
    function(articulo){
        return articulo.coste <= 500;
    }
);

//método map: mapear artículos por su nombre
var nombreArticulos = articulos.map (
    function(articulo){
        return articulo.nombre;
    }
);

//método find: encontrar algo dentro de articulos
var findArticulos = articulos.find (
    function(articulo){
        return articulo.nombre === "Laptop";
    }
);

//método forEach: realiza una determinada acción sobre cada elementos de un array de objetos.
articulos.forEach(
    function (articulo){
        console.log (articulo.nombre);
    }
)

//método some: comprueba si existen artículos menores o iguales a 700 euros
var articulosBaratos = articulos.some (
    function (articulo){
        return articulo.coste <= 700;
    }
)

/* ELIMINANDO ELEMENTOS DE UN ARRAY */

// Vamos a añadir un elemento más al array artículos
articulos.push (
    {nombre:"Tablet", coste: 600}
);


//método shift: elimina el primer elemento de un array y lo devuelve
var articuloEliminado = articulos.shift();

//método pop: elimina el último elemento de un array y lo devuelve
var articuloEliminado = articulos.pop();
















