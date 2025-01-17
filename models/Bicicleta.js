// Constructor
let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

// Almacen de datos
Bicicleta.allBicis = [];

// Funcion para agregar una bicicleta
Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

// Hardcodear dos bicis
let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

// Exportar modulo
module.exports = Bicicleta;