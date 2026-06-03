def busqueda_binaria(lista, objetivo):
    inicio = 0
    fin = len(lista) - 1

    while inicio <= fin:
        medio = (inicio + fin) // 2

        if lista[medio] == objetivo:
            return medio
        elif lista[medio] < objetivo:
            inicio = medio + 1
        else:
            fin = medio - 1

    return -1
print(busqueda_binaria([2, 4, 6, 8, 10, 12], 8))

# Lista ordenada
numeros = [2, 4, 6, 8, 10, 12]

# Buscar el número 8
resultado = busqueda_binaria(numeros, 8)
print("Elemento encontrado en la posición:", resultado)