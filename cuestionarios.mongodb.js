// crear la colección vacía para cuestionarios
use("cetis108");
db.createCollection("cuestionarios");

// agregar datos generales de un cuestionario
// tomar en cuenta que debería permitir guardar n cuestionarios
use("cetis108");
db.getCollection("cuestionarios")
    .insertOne(
        {
            fecha_inicio: "2025-04-30 14:10",
            fecha_fin: "2025-05-05 15:000",
            creado_por: "Bidkar"
        }
    );

// oid: 68128caeaa595e21d5f7c9f4
// revisar los cuestionarios registrados
use("cetis108");
db.cuestionarios.find();

// agregar tres preguntas al cuestionario creado anteriormete
use("cetis108");
db.cuestionarios.updateOne(
    { _id: ObjectId("68128caeaa595e21d5f7c9f4") },
    { $set: { preguntas: [
        { 
            pregunta: "pregunta 1", 
            opcion1: "op1", 
            opcion2: "op2",
            opcion3: "op3",
            respuesta_correcta: "op2"
        },
        { 
            pregunta: "pregunta 2", 
            opcion1: "op1", 
            opcion2: "op2",
            opcion3: "op3",
            respuesta_correcta: "op1"
        },
        { 
            pregunta: "pregunta 3", 
            opcion1: "op1", 
            opcion2: "op2",
            opcion3: "op3",
            respuesta_correcta: "op3"
        }
    ]}}
);

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

