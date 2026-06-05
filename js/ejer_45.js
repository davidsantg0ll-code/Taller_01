// 45. Calcular promedio del arreglo
const arr = [10, 20, 30, 40, 50];
const avg = arr.reduce((acc, x) => acc + x, 0) / arr.length;
console.log('Arreglo:', arr);
console.log('Promedio:', avg.toFixed(2));
