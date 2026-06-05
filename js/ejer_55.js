// 55. Calcular mayor, menor y promedio de un arreglo
const arr = [45, 23, 89, 12, 67, 90, 34];
const max = Math.max(...arr);
const min = Math.min(...arr);
const avg = arr.reduce((a, x) => a + x, 0) / arr.length;
console.log('Arreglo:', arr);
console.log('Mayor:', max);
console.log('Menor:', min);
console.log('Promedio:', avg.toFixed(2));
