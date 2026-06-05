// 56. Simular carrito de compras (Agregar productos, mostrar total)
const cart = [
  { product: 'Manzana', price: 2.5, qty: 3 },
  { product: 'Pan', price: 1.2, qty: 2 },
  { product: 'Leche', price: 3.0, qty: 1 }
];
const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
console.log('Carrito:');
cart.forEach(item => console.log(`  ${item.product}: $${item.price} x${item.qty} = $${(item.price * item.qty).toFixed(2)}`));
console.log('Total:', '$' + total.toFixed(2));
