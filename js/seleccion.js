function seleccion(lista) {
    for (let i = 0; i < lista.length; i++) {
        let minimo = i;

        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[minimo]) {
                minimo = j;
            }
        }

        let temp = lista[i];
        lista[i] = lista[minimo];
        lista[minimo] = temp;
    }

    return lista;
}
console.log(seleccion([5,3,8,1]));