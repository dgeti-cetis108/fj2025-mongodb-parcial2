// crear la colección vacía para cuestionarios
use("cetis108");
db.createCollection("cuestionarios");

// eliminar los documentos de la colección cuestionarios
use("cetis108");
db.cuestionarios.drop();

// agregar datos generales de un cuestionario
// tomar en cuenta que debería permitir guardar n cuestionarios
use("cetis108");
db.getCollection("cuestionarios")
    .insertOne(
        {
            cuestionario_id: "FJ2025-NOSQL-01",
            titulo: "Examen diagnóstico para base de datos no relacionales",
            fecha_inicio: "2025-02-04T07:00",
            fecha_fin: "2025-02-06T15:00",
            creado_por: "Bidkar",
            banco_preguntas: [],
            examenes: []
        }
    );

// oid: 68128caeaa595e21d5f7c9f4
// revisar los cuestionarios registrados
use("cetis108");
db.cuestionarios.find();

// agregar tres preguntas al cuestionario creado anteriormete
use("cetis108");
db.cuestionarios.updateOne(
    { cuestionario_id: "FJ2025-NOSQL-01" },
    {
        $push: {
            banco_preguntas:
            {
                pregunta_id: 1,
                pregunta: "Elige un DBMS correcto",
                opciones: ["ABC", "MongoDB", "File System"],
                respuesta_correcta: "MongoDB"
            }
        }
    });

use("cetis108");
db.cuestionarios.updateOne(
    { cuestionario_id: "FJ2025-NOSQL-01" },
    {
        $push: {
            banco_preguntas:
            {
                pregunta_id: 2,
                pregunta: "¿Cuál es la instrucción para mostrar todos los documentos?",
                opciones: ["findOne", "match", "find"],
                respuesta_correcta: "find"
            }
        }
    });

use("cetis108");
db.cuestionarios.updateOne(
    { cuestionario_id: "FJ2025-NOSQL-01" },
    {
        $push: {
            banco_preguntas:
            {
                pregunta_id: 3,
                pregunta: "¿Nombre de la propiedad que hace único a cada documento?",
                opciones: ["_id", "id", "Id"],
                respuesta_correcta: "_id"
            }
        }
    });
        
use("cetis108");
db.cuestionarios.find();


// ["p1","p2","p3"] -> ["p3","p1","p2"] -> ["p3","p1"]
use("cetis108");
// obtener el cuestionario a trabajar
let cuestionario = db.cuestionarios.findOne({ cuestionario_id: "FJ2025-NOSQL-01" });
// obtener las preguntas aleatorias
let preguntasAleatorias = 
    cuestionario.banco_preguntas.sort(() => 0.5 - Math.random()).slice(0,2);
print(preguntasAleatorias);


// TODO: terminar de registrar respuestas de dos alumnos
use("cetis108");
let preguntas_ = db.cuestionarios.aggregate([
    // unwind: separa o extrae los elementos de un array
    { $unwind: "$preguntas" },
    // obtener 2 de las 3 preguntas de forma aleatoria
    // sample: toma una muestra aleatoria del tamaño determinado
    { $sample: { size: 2 } },
    { $group: { _id:1, preguntas: { $push: "$preguntas" } } },
    { $project: { _id: 0, preguntas: 1 }}
]);

db.cuestionarios.updateOne(
    { _id: ObjectId("68128caeaa595e21d5f7c9f4") },
    {
        $set: {
            evaluaciones: [{
                alumno: "Manuel Gaxiola",
                grupo: "4BPR",
                preguntas: preguntas_.toArray()
            }]
        }
    }
);

