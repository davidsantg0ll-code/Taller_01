# 50. Eliminar elementos duplicados
arr = [10, 20, 10, 30, 20, 40, 50, 30]
unique = list(dict.fromkeys(arr))  # Preserva orden
print('Arreglo original:', arr)
print('Sin duplicados:', unique)
