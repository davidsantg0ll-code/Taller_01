let n = parseInt(prompt("Ingrese un número:"));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("El factorial es:", factorial);