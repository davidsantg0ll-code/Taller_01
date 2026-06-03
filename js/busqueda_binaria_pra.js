function busquedaBinaria(lista, objetivo) {
    let izquierda = 0;
    let derecha = lista.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (lista[medio] === objetivo) {
            return medio;
        } else if (lista[medio] < objetivo) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }

    return -1;
}

let numeros = [1, 3, 5, 7, 9];

console.log(busquedaBinaria(numeros, 7,));