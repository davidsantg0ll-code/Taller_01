function busquedaLineal(lista, nombre) {
    for (let estudiante of lista) {
        if (estudiante.nombre === nombre) {
            return estudiante;
        }
    }

    return "No encontrado";
}

let estudiantes = [
    {nombre: "Ana"},
    {nombre: "Luis"}
];

console.log(busquedaLineal(estudiantes, "Luis"));