def main():
    raw = input('Ingrese un número: ')
    try:
        num = int(raw)
    except ValueError:
        print('Entrada inválida. Introduce un número entero.')
        return

    # Contar dígitos: usar valor absoluto para manejar negativos
    digit_count = len(str(abs(num)))
    print(f'El número {num} tiene {digit_count} dígito(s).')


if __name__ == '__main__':
    main()
