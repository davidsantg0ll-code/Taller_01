// 50. Eliminar elementos duplicados
const arr = [10, 20, 10, 30, 20, 40, 50, 30];
const unique = [...new Set(arr)];
console.log('Arreglo original:', arr);
console.log('Sin duplicados:', unique);
