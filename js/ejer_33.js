const rawInput = typeof prompt === 'function'
  ? prompt('Ingrese un número para mostrar su tabla de multiplicar (1-10):')
  : null;
const numero = parseInt(rawInput, 10);

if (!isNaN(numero)) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log('Número inválido.');
}
