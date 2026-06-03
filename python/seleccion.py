def seleccion(lista):
    n = len(lista)

    for i in range(n):
        minimo = i

        for j in range(i+1, n):
            if lista[j] < lista[minimo]:
                minimo = j

        lista[i], lista[minimo] = lista[minimo], lista[i]

    return lista
print(seleccion([5,3,8,1]))
