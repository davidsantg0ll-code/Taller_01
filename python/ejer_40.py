def main():
    raw = input('Ingrese un número: ')
    try:
        num = int(raw)
    except ValueError:
        print('Entrada inválida. Introduce un número entero.')
        return

    # Invertir: convertir a string, revertir y convertir de vuelta
    is_negative = num < 0
    inverted = str(abs(num))[::-1]
    result = '-' + inverted if is_negative else inverted
    print(f'El número {num} invertido es: {result}')


if __name__ == '__main__':
    main()
