# 53. Registrar usuarios (nombre y edad) en arreglo
users = [
    {'name': 'Juan', 'age': 25},
    {'name': 'María', 'age': 30},
    {'name': 'Pedro', 'age': 22}
]
print('Usuarios registrados:')
for u in users:
    print(f"  {u['name']}: {u['age']} años")
