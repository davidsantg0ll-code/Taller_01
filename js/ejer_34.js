const rawInput = typeof prompt === 'function' ? prompt("Ingrese un número:") : null;
const N = parseInt(rawInput, 10);

if (isNaN(N) || N < 1) {
    console.log('Entrada inválida. Introduce un entero positivo.');
} else {
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    console.log('La suma es:', suma);
}