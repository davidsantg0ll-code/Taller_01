let estudiantes = [
    {nombre: "Ana", promedio: 4.5},
    {nombre: "Luis", promedio: 3.2},
    {nombre: "Carlos", promedio: 4.9}
];

for (let i = 0; i < estudiantes.length; i++) {
    for (let j = 0; j < estudiantes.length - 1; j++) {
        if (estudiantes[j].promedio > estudiantes[j + 1].promedio) {

            let temp = estudiantes[j];
            estudiantes[j] = estudiantes[j + 1];
            estudiantes[j + 1] = temp;
        }
    }
}

console.log(estudiantes.map(estudiante => [estudiante.nombre, estudiante.promedio]));

//metodo seleccion
