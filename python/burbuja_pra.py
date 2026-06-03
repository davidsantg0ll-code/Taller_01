estudiantes = [
    {"nombre": "Ana", "promedio": 4.5},
    {"nombre": "Luis", "promedio": 3.2},
    {"nombre": "Carlos", "promedio": 4.9}
]

for i in range(len(estudiantes)):
    for j in range(len(estudiantes)-1):
        if estudiantes[j]["promedio"] > estudiantes[j+1]["promedio"]:
            estudiantes[j], estudiantes[j+1] = estudiantes[j+1], estudiantes[j]

print([(estudiante["nombre"], estudiante["promedio"]) for estudiante in estudiantes])

#metodo seleccion
estudiantes = [
    {"nombre": "Ana", "promedio": 4.5},
    {"nombre": "Luis", "promedio": 3.2},
    {"nombre": "Carlos", "promedio": 4.9}
]

for i in range(len(estudiantes)):
    min_index = i

    for j in range(i + 1, len(estudiantes)):
        if estudiantes[j]["promedio"] < estudiantes[min_index]["promedio"]:
            min_index = j

    estudiantes[i], estudiantes[min_index] = estudiantes[min_index], estudiantes[i]

print(estudiantes)