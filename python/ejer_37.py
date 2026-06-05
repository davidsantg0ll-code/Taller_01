def pedir_entero(prompt_text):
	while True:
		try:
			v = int(input(prompt_text))
			return v
		except ValueError:
			print('Entrada inválida. Introduce un entero.')


def fibonacci_n_terms(n):
	if n <= 0:
		return []
	if n == 1:
		return [0]
	seq = [0, 1]
	while len(seq) < n:
		seq.append(seq[-1] + seq[-2])
	return seq


def main():
	N = pedir_entero('Ingrese la cantidad de términos N para Fibonacci: ')
	if N <= 0:
		print('N debe ser un entero positivo.')
		return
	seq = fibonacci_n_terms(N)
	print(f'Fibonacci hasta {N} términos: {", ".join(str(x) for x in seq)}')


if __name__ == '__main__':
	main()

