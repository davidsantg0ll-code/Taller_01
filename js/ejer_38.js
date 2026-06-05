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

  const target = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  while (true) {
    const raw = await ask('Adivina un número entre 1 y 10: ');
    const guess = parseInt(raw, 10);
    attempts++;

    if (isNaN(guess)) {
      console.log('Entrada inválida. Introduce un número.');
      if (typeof alert === 'function') alert('Entrada inválida. Introduce un número.');
      continue;
    }

    if (guess === target) {
      const msg = `¡Correcto! Lo adivinaste en ${attempts} intentos.`;
      console.log(msg);
      if (typeof alert === 'function') alert(msg);
      break;
    }

    if (guess < target) {
      console.log('El número es mayor.');
      if (typeof alert === 'function') alert('El número es mayor.');
    } else {
      console.log('El número es menor.');
      if (typeof alert === 'function') alert('El número es menor.');
    }
  }
})();
