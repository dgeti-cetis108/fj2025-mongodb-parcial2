/*
DISEÑO DE UNA ESTRUCTURA DE HORARIOS DE CLASES DEL CETIS108 EN MONGODB

Planteamiento del problema:
La institución educativa necesita registrar los horarios de clases de sus diferentes grupos. Cada horario debe contener información sobre el grupo, el docente asignado, la asignatura, el día y la hora de la clase, así como el aula donde se imparte.

Requerimientos:
1. Diseña una estructura de documento en MongoDB que permita almacenar los horarios de clases. Utiliza todos los tipos de datos que hemos practicado en clases como mínimo (string, number, array, date, etc.).

2. Cada registro de horario debe incluir:
    - El grupo (por ejemplo: "4APR", "4BPR", etc.)
    - El docente (nombre)
    - La asignatura (nombre)
    - El día de la semana (por ejemplo: "Lunes", "Martes", etc.)
    - La hora de inicio y fin de la clase
    - El aula o salón donde se imparte la clase (por ejemplo: "A8", "TP1", "A6", etc.)

3. Registra horarios completos de dos grupos (de lunes a viernes, todas las clases).

4. Utiliza horarios oficiales de la escuela y guarda todo en una colección "horarios" dentro de la base de datos "cetis108".
*/