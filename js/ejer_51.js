// 51. Registrar 5 notas, calcular promedio y determinar estado
const notes = [8.5, 9.0, 7.5, 8.0, 8.2];
const avg = notes.reduce((a, n) => a + n, 0) / notes.length;
const status = avg >= 7 ? 'Aprobado' : 'Reprobado';
console.log('Notas:', notes);
console.log('Promedio:', avg.toFixed(2));
console.log('Estado:', status);
