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

  // Contar dígitos: usar valor absoluto para manejar negativos
  const digitCount = Math.abs(num).toString().length;
  const result = `El número ${num} tiene ${digitCount} dígito(s).`;
  console.log(result);
  if (typeof alert === 'function') alert(result);
})();
