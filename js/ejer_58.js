// 58. Crear matriz 3x3 e imprimirla
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Matriz 3x3:');
matrix.forEach(row => console.log(row.join('\t')));
