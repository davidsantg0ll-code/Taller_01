# 46. Contar cuántos números pares hay en arreglo
arr = [10, 15, 22, 33, 44, 56, 67, 78]
even_count = len([x for x in arr if x % 2 == 0])
print('Arreglo:', arr)
print('Cantidad de números pares:', even_count)
