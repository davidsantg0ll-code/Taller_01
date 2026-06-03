function busquedaLineal(lista, objetivo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === objetivo) {
            return i;
        }
    }
    return -1;
}
numeros = [3, 5, 7, 9];
console.log(busquedaLineal([3,5,7,9], 7));

//ejemplo 2

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