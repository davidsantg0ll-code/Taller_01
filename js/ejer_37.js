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

	const rawN = await ask('Ingrese la cantidad de términos N para Fibonacci: ');
	const N = parseInt(rawN, 10);
	if (isNaN(N) || N <= 0) {
		console.log('Entrada inválida. Introduce un entero positivo para N.');
		return;
	}

	const fib = [];
	for (let i = 0; i < N; i++) {
		if (i === 0) fib.push(0);
		else if (i === 1) fib.push(1);
		else fib.push(fib[i-1] + fib[i-2]);
	}

	console.log('Fibonacci hasta', N, 'términos:', fib.join(', '));
	if (typeof document !== 'undefined') {
		const pre = document.createElement('pre');
		pre.textContent = 'Fibonacci hasta ' + N + ' términos: ' + fib.join(', ');
		document.body.appendChild(pre);
	}
})();

