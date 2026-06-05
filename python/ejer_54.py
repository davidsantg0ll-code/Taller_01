# 54. Mostrar usuarios mayores de edad (>=18)
users = [
    {'name': 'Juan', 'age': 25},
    {'name': 'Ana', 'age': 17},
    {'name': 'María', 'age': 30},
    {'name': 'Carlos', 'age': 16}
]
adults = [u for u in users if u['age'] >= 18]
print('Usuarios mayores de edad:')
for u in adults:
    print(f"  {u['name']}: {u['age']}")
