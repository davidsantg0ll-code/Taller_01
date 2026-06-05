def pedir_entero(prompt_text):
	while True:
		try:
			v = int(input(prompt_text))
			return v
		except ValueError:
			print('Entrada inválida. Introduce un entero.')


def main():
	N = pedir_entero('Ingrese la cantidad N de números a ingresar: ')
	if N <= 0:
		print('N debe ser un entero positivo.')
		return

	positivos = 0
	for i in range(1, N+1):
		while True:
			try:
				x = float(input(f'Ingrese el número {i}: '))
				break
			except ValueError:
				print('Entrada inválida. Introduce un número.')
		if x > 0:
			positivos += 1

	print(f'Cantidad de números positivos: {positivos}')


if __name__ == '__main__':
	main()

