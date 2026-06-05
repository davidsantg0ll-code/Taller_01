# 42. Sumar elementos de arreglo N aleatorios
import random
N = 10
arr = [random.randint(1, 100) for _ in range(N)]
total = sum(arr)
print('Arreglo:', arr)
print('Suma:', total)
