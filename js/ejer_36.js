(async function() {
	function hasPrompt() {
		return typeof prompt === 'function';
	}

	function askBrowser(question) {
		return prompt(question);
	}

	function askNode(question) {
		const rl = require('readline').createInterface({
			input: process.stdin,
			output: process.stdout
		});
		return new Promise(resolve => rl.question(question, ans => {
			rl.close();
			resolve(ans);
		}));
	}

	async function ask(question) {
		if (hasPrompt()) return askBrowser(question);
		if (typeof require === 'function' && typeof process !== 'undefined') return await askNode(question);
		return null;
	}

	const rawN = await ask('Ingrese la cantidad N de números a ingresar: ');
	const N = parseInt(rawN, 10);
	if (isNaN(N) || N <= 0) {
		console.log('Entrada inválida. Introduce un entero positivo para N.');
		return;
	}

	let positivos = 0;
	for (let i = 1; i <= N; i++) {
		const raw = await ask(`Ingrese el número ${i}: `);
		const num = parseFloat(raw);
		if (!isNaN(num) && num > 0) positivos++;
	}

	console.log(`Cantidad de números positivos: ${positivos}`);
})();

