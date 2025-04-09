// actualizar el estatus de inscripción de todos aquellos alumnos
// que a este momento aparezcan como no inscritos
use("cetis108")
db.alumnos.find({ inscrito: false })

use("cetis108")
db.alumnos.updateMany(
    { inscrito: false },
    { $set: { inscrito: true } }
)