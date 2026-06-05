// 52. Menú CRUD en arreglo (Agregar, Listar, Actualizar, Eliminar)
let items = ['Item 1', 'Item 2', 'Item 3'];
function showMenu() {
  console.log('1. Agregar\n2. Listar\n3. Actualizar\n4. Eliminar\n5. Salir');
}
function addItem(item) { items.push(item); console.log('Agregado'); }
function listItems() { console.log('Items:', items); }
function updateItem(i, val) { if(i>=0 && i<items.length) items[i]=val; }
function deleteItem(i) { if(i>=0 && i<items.length) items.splice(i,1); }
console.log('Menú CRUD de Ejemplo:');
addItem('Item 4');
listItems();
updateItem(0, 'Item 1 Actualizado');
listItems();
deleteItem(1);
listItems();
