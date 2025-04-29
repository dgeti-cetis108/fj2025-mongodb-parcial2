// actualizar el estatus de inscripción de todos aquellos alumnos
// que a este momento aparezcan como no inscritos
use("cetis108")
db.alumnos.find({ inscrito: false })

use("cetis108")
db.alumnos.updateMany(
    { inscrito: false },
    { $set: { inscrito: true } }
)

// agregar el lugar de nacimiento a tu documento
use("cetis108")
db.alumnos.findOne({ nombres: "Lilian Estefania" }, { _id: 1 })

// _id: 67eeec6eb45c7b05b22f26e3
use("cetis108")
db.alumnos.updateOne(
    { _id: ObjectId('67eeec6eb45c7b05b22f26e3') },
    { $set: { lugar_de_nacimiento: "Guasave" } }
)

use("cetis108")
db.alumnos.findOne({ _id: ObjectId('67eeec6eb45c7b05b22f26e3') })

// consulta para salvar el matrimonio
use("cetis108")
db.alumnos.updateOne(
    { _id: ObjectId('67eeec6eb45c7b05b22f26e3') },
    { $set: { segundo_apellido: "Urias" } }
)

// TODO: agregar a tu registro cada escuela y el promedio de graduación
// en la que has estudiado hasta el momento.
// TIP: utiliza objetos y matrices (arrays)
// Un alumno tiene un curriculum, el curriculum se conforma de escuelas
// en las que has estudiado y cada escuela tiene nombre, nivel y promedio
// Alumno
//     curriculum
//         kinder
//             nombre
//             nivel
//             promedio
//         primaria
//             nombre
//             nivel
//             promedio
//         secundaria
//             nombre
//             nivel
//             promedio
//         preparatoria
//             nombre
//             nivel
//             promedio

use("cetis108")
db.alumnos.updateOne(
    { _id: ObjectId('67eeec6eb45c7b05b22f26e3') },
    {
        $set: {
            curriculum: [
                {
                    nombre: "Rodolfo T. Loaiza", nivel: "Preescolar", promedio: 10.0
                },
                {
                    nombre: "Jesús Salvador Palacios Vargas",
                    nivel: "Primaria", promedio: 9.5
                },
                {
                    nombre: "ESFI", nivel: "Secundaria", promedio: 9.8
                },
                {
                    nombre: "CETis108", nivel: "Bachillerato", promedio: 9.8
                }
            ]
        }
    }
)