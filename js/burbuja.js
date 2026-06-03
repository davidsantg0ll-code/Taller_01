function burbuja(lista) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - i - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

console.log(burbuja([5,3,8,1]));