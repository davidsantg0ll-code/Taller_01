# 57. Validar contraseña (≥8 caracteres, al menos 1 número)
def validate_password(pwd):
    has_length = len(pwd) >= 8
    has_digit = any(c.isdigit() for c in pwd)
    return has_length and has_digit

passwords = ['Pass1234', 'weak', 'ABC12345', 'pass']
print('Validación de contraseñas:')
for p in passwords:
    valid = validate_password(p)
    print(f'  "{p}": {"Válida" if valid else "Inválida"}')
