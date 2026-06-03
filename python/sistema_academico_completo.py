estudiantes = [
    {"nombre": "Ana", "notas": [4.5, 4.0, 5.0]},
    {"nombre": "Luis", "notas": [3.0, 3.5, 4.0]},
    {"nombre": "Carlos", "notas": [5.0, 4.8, 4.9]}
]

# Calcular promedio
for estudiante in estudiantes:
    promedio = sum(estudiante["notas"]) / len(estudiante["notas"])
    estudiante["promedio"] = round(promedio, 2)

# Ordenar por promedio
estudiantes.sort(key=lambda x: x["promedio"], reverse=True)

# Buscar estudiante
nombre_buscar = "Luis"

for estudiante in estudiantes:
    if estudiante["nombre"] == nombre_buscar:
        print("Estudiante encontrado:")
        print(estudiante)

# Mejor estudiante
print("Mejor estudiante:")
print(estudiantes[0])