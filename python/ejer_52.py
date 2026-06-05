# 52. Menú CRUD en arreglo (Agregar, Listar, Actualizar, Eliminar)
items = ['Item 1', 'Item 2', 'Item 3']

def add_item(item):
    items.append(item)
    print('Agregado')

def list_items():
    print('Items:', items)

def update_item(i, val):
    if 0 <= i < len(items):
        items[i] = val

def delete_item(i):
    if 0 <= i < len(items):
        items.pop(i)

print('Menú CRUD de Ejemplo:')
add_item('Item 4')
list_items()
update_item(0, 'Item 1 Actualizado')
list_items()
delete_item(1)
list_items()
