# 58. Crear matriz 3x3 e imprimirla
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print('Matriz 3x3:')
for row in matrix:
    print('\t'.join(str(x) for x in row))
