// consulta para guardar un alumno
use('cetis108');
db.getCollection('alumnos').insertOne(
    {
        nombres: 'Lilian Estefania',
        primer_apellido: 'Aragón',
        segundo_apellido: 'Cárdenas',
        no_control: '17325061080001',
        generacion: '2017-2020',
        inscrito: false
    }
);

// 67eeec6eb45c7b05b22f26e3
// 67eeecb15327e7c089c1d75b