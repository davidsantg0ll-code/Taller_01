# 59. Juego: adivinar número con máximo 5 intentos
import random
target = random.randint(1, 100)
attempts = 0
max_attempts = 5
print('Adivina el número (1-100). ¡Tienes 5 intentos!')
guesses = [50, 25, 75, 60, 65]
for guess in guesses:
    attempts += 1
    print(f'Intento {attempts}: {guess}')
    if guess == target:
        print('¡Correcto!')
        break
    elif guess < target:
        print('Es mayor')
    else:
        print('Es menor')
    if attempts >= max_attempts:
        print(f'Perdiste. El número era: {target}')
        break
