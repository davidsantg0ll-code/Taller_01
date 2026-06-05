// 46. Contar cuántos números pares hay en arreglo
const arr = [10, 15, 22, 33, 44, 56, 67, 78];
const even_count = arr.filter(x => x % 2 === 0).length;
console.log('Arreglo:', arr);
console.log('Cantidad de números pares:', even_count);
