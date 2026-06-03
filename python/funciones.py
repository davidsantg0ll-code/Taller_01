def factorial(n):
    if n < 0:
        return "No existe factorial para negativos"

    resultado = 1

    for i in range(1, n + 1):
        resultado *= i

    return resultado

print(factorial(5))
print(factorial(-3))


def es_primo(numero):
    if numero <= 1:
        return False

    for i in range(2, numero):
        if numero % i == 0:
            return False

    return True

print(es_primo(6))