// 42. Sumar elementos de arreglo N aleatorios
const N = 10;
const arr = Array.from({length: N}, () => Math.floor(Math.random() * 100) + 1);
const sum = arr.reduce((acc, x) => acc + x, 0);
console.log('Arreglo:', arr);
console.log('Suma:', sum);
