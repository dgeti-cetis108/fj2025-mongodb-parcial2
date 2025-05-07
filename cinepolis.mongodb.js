// crear la base de datos
use("cine");

// crear la colección
db.createCollection("funciones");


// agregar funciones de cine
const pelicula1 = {
    titulo: "Thunderbolts",
    genero: "Acción",
    duracion: 127,
    clasificacion: "B"
};

const sala1 = {
    numero: 1,
    capacidad: 100,
    tipo_proyeccion: "2D"
};

use("cine");
db.funciones.insertOne({
    pelicula: pelicula1,
    sala: sala1,
    horario: ISODate("2025-05-07T14:40"),
    asientos_disponibles: 76
});

// revisar las funciones guardadas
use("cine");
db.funciones.find();

use("cine");
db.funciones.insertOne({
    pelicula: {
        titulo: "Una Película De Minecraft",
        genero: "Aventura",
        duracion: 101,
        clasificacion: "A"
    },
    sala: {
        numero: 4,
        capacidad: 200,
        tipo_proyeccion: "3D"
    },
    horario: ISODate("2025-05-07T14:20"),
    asientos_disponibles: 199
});

// mostrar cuantas funciones estan guardadas
use("cine");
db.funciones.find().count();