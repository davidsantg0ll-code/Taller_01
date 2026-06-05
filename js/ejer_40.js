(async function() {
  function hasPrompt() { return typeof prompt === 'function'; }

  function askBrowser(q) { return prompt(q); }

  function askNode(q) {
    const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => rl.question(q, ans => { rl.close(); resolve(ans); }));
  }

  async function ask(q) {
    if (hasPrompt()) return askBrowser(q);
    if (typeof require === 'function' && typeof process !== 'undefined') return await askNode(q);
    return null;
  }

  const raw = await ask('Ingrese un número: ');
  const num = parseInt(raw, 10);

  if (isNaN(num)) {
    const msg = 'Entrada inválida. Introduce un número entero.';
    console.log(msg);
    if (typeof alert === 'function') alert(msg);
    return;
  }

  // Invertir: convertir a string, dividir, invertir y unir
  const inverted = Math.abs(num).toString().split('').reverse().join('');
  const result = num < 0 ? '-' + inverted : inverted;
  const msg = `El número ${num} invertido es: ${result}`;
  console.log(msg);
  if (typeof alert === 'function') alert(msg);
})();
