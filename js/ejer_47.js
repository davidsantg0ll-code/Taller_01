// 47. Buscar un número y mostrar su posición
const arr = [10, 23, 45, 67, 89, 45, 12];
const target = 45;
const positions = arr.map((x, i) => x === target ? i : -1).filter(i => i !== -1);
console.log('Arreglo:', arr);
console.log(`Buscando: ${target}`);
if (positions.length > 0) {
  console.log(`Encontrado en posición(es): ${positions}`);
} else {
  console.log('No encontrado');
}
