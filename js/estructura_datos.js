let estudiantes = [
    {nombre: "Ana", promedio: 4.5},
    {nombre: "Luis", promedio: 3.8},
    {nombre: "Carlos", promedio: 4.9},
    {nombre: "María", promedio: 2.2}
];

let mejor = estudiantes[0];

for (let estudiante of estudiantes) {
    if (estudiante.promedio > mejor.promedio) {
        mejor = estudiante;
    }
}

console.log("Mejor estudiante:", mejor.nombre);