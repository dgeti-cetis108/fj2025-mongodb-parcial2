// buscar al primer alumno no inscrito
use("cetis108")
db.getCollection("alumnos").findOne(
    {
        inscrito: false
    }
)
// ejecutar la búsqueda y obtener el _id
// el _id encontrado fue: 67d054bd66c698a96c9da746

// eliminar el documento del primer alumno no inscrito previamente ubicado
use("cetis108")
db.getCollection("alumnos").deleteOne({_id:"67d054bd66c698a96c9da746"})

// probar si el documento del alumno fue eliminado
use("cetis108")
db.getCollection("alumnos").findOne({_id:"67d054bd66c698a96c9da746"})