# Validación de usuario y contraseña predefinidos

# Credenciales predefinidas
usuario_correcto = "admin"
contraseña_correcto = "1234"

# Solicitar entrada del usuario
print("=== Ingreso al Sistema ===\n")

usuario_ingresado = input("Usuario: ")
contraseña_ingresado = input("Contraseña: ")

# Validar credenciales
if usuario_ingresado == usuario_correcto and contraseña_ingresado == contraseña_correcto:
    print("\n✓ Acceso concedido. ¡Bienvenido!")
else:
    print("\n✗ Usuario o contraseña incorrectos.")
