function busquedaBinaria(lista, objetivo) {
    let inicio = 0;
    let fin = lista.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (lista[medio] === objetivo) {
            return medio;
        } else if (lista[medio] < objetivo) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
}
console.log(busquedaBinaria([2, 4, 6, 8, 10, 12], 8));  

// Lista ordenada
let numeros = [2, 4, 6, 8, 10, 12];

// Buscar el número 8
let resultado = busquedaBinaria(numeros, 8);

console.log("Elemento encontrado en la posición:", resultado); 