#ejemplo 1
def busqueda_lineal(lista, objetivo):
    for i in range(len(lista)):
        if lista[i] == objetivo:
            return i
    return -1

numeros = [3, 5, 7, 9]
print(busqueda_lineal(numeros, 7))

#ejemplo 2

def busqueda_lineal(lista, nombre):
    for estudiante in lista:
        if estudiante["nombre"] == nombre:
            return estudiante

    return "No encontrado"


estudiantes = [
    {"nombre": "Ana"},
    {"nombre": "Luis"}
]

print(busqueda_lineal(estudiantes, "Luis"))