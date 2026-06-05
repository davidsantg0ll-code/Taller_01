import random


def main():
    target = random.randint(1, 10)
    attempts = 0

    while True:
        raw = input('Adivina un número entre 1 y 10: ')
        try:
            guess = int(raw)
        except ValueError:
            print('Entrada inválida. Introduce un número entero.')
            continue
        attempts += 1

        if guess == target:
            print(f'¡Correcto! Lo adivinaste en {attempts} intentos.')
            break
        elif guess < target:
            print('El número es mayor.')
        else:
            print('El número es menor.')


if __name__ == '__main__':
    main()
