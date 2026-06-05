# 47. Buscar un número y mostrar su posición
arr = [10, 23, 45, 67, 89, 45, 12]
target = 45
positions = [i for i, x in enumerate(arr) if x == target]
print('Arreglo:', arr)
print(f'Buscando: {target}')
if positions:
    print(f'Encontrado en posición(es): {positions}')
else:
    print('No encontrado')
