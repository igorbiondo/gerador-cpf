import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function () {
	const gerar = document.querySelector('.gerar');
	gerar.addEventListener('click', () => {
		cpfGerado.innerHTML = gera.geraNovoCpf();
	});
	const gera = new GeraCPF();
	const cpfGerado = document.querySelector('.cpf-gerado');
	cpfGerado.innerHTML = gera.geraNovoCpf();
})();
