/*//objeto. 
var miAuto = {

    //atributos
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,

    //metodos
    detalleDelAuto: function (){
        console.log(`Coche ${this.modelo} ${this.annio}`);
    }
    
}*/



//funcion constructora que es un template para los nuevos objetos.

function Auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;        
}

var autos = [];

for (var i = 0; i < 3; i++){
    var marca = prompt ("Ingresa la marca del auto");
    var modelo = prompt ("Ingresa el modelo del auto");
    var annio = prompt ("Ingresa el año del auto");
    
    autos.push (new Auto (marca, modelo, annio));
}

for (auto of autos){
    console.log(auto);
}

