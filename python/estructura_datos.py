estudiantes = [
    {"nombre": "Juan", "promedio": 4.5},
    {"nombre": "María", "promedio": 3.8},
    {"nombre": "Pedro", "promedio": 4.2},
    {"nombre": "Ana", "promedio": 2.0}
]
mejor = estudiantes[0]
for estudiante in estudiantes:
    if estudiante["promedio"] > mejor["promedio"]:
        mejor = estudiante
print('mejor estudiante', mejor.get("nombre"))
    