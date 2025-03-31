// consulta para mostrar todos los alumnos
use("cetis108");
db.getCollection("alumnos").find();

// consulta para mostrar un alumno
use("cetis108");
db.getCollection("alumnos").findOne();

// consulta para mostrar los alumnos no inscritos
use("cetis108");
db.getCollection("alumnos").find({"inscrito":false});

// consulta para mostrar cuantos alumnos no están inscritos
use("cetis108");
db.getCollection("alumnos").find({"inscrito":false}).count();
