function factorial(n) {
    if (n < 0) {
        return "No existe factorial para negativos";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5));
console.log(factorial(-3));


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(esPrimo(7));