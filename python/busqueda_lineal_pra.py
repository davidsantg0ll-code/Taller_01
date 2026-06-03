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