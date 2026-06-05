// 59. Juego: adivinar número con máximo 5 intentos
const target = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const max_attempts = 5;
console.log('Adivina el número (1-100). ¡Tienes 5 intentos!');
// Simulación: intentos automáticos
const guesses = [50, 25, 75, 60, 65];
for (let guess of guesses) {
  attempts++;
  console.log(`Intento ${attempts}: ${guess}`);
  if (guess === target) {
    console.log('¡Correcto!');
    break;
  } else if (guess < target) {
    console.log('Es mayor');
  } else {
    console.log('Es menor');
  }
  if (attempts >= max_attempts) {
    console.log('Perdiste. El número era: ' + target);
    break;
  }
}
