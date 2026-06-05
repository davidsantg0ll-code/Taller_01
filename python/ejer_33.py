raw_input_value = input('Ingrese un número para mostrar su tabla de multiplicar (1-10): ')

try:
    numero = int(raw_input_value)
    for i in range(1, 11):
        print(f'{numero} x {i} = {numero * i}')
except ValueError:
    print('Número inválido.')