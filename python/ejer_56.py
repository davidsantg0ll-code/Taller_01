# 56. Simular carrito de compras (Agregar productos, mostrar total)
cart = [
    {'product': 'Manzana', 'price': 2.5, 'qty': 3},
    {'product': 'Pan', 'price': 1.2, 'qty': 2},
    {'product': 'Leche', 'price': 3.0, 'qty': 1}
]
total = sum(item['price'] * item['qty'] for item in cart)
print('Carrito:')
for item in cart:
    subtotal = item['price'] * item['qty']
    print(f"  {item['product']}: ${item['price']} x{item['qty']} = ${subtotal:.2f}")
print('Total: $' + str(round(total, 2)))
