window.onload = function () {
	console.log('Conexión');
	let titulo = document.querySelector('.moviesAddTitulo');
	let formulario = document.querySelector('#formulario');
	let article = document.querySelector('article');
	let title = document.querySelector('#titulo');

	titulo.innerHTML = 'AGREGAR PELÍCULA';
	titulo.classList.add('titulo');
	article.classList.add('fondoTransparente');
	formulario.classList.add('fondoCRUD');

	titulo.addEventListener('mouseenter', function () {
		titulo.style.color = 'blue';
	});

	titulo.addEventListener('mouseleave', function () {
		titulo.style.color = 'black';
	});

	let estadoSecreto = 0;
	title.addEventListener('keyup', function (e) {
		let key = e.key;
		if (key === 's' && estadoSecreto === 0) {
			estadoSecreto += 1;
			console.log('s');
		} else if ((key === 'e' && estadoSecreto === 1) || estadoSecreto === 4) {
			estadoSecreto += 1;
		} else if (key === 'c' && estadoSecreto === 2) {
			estadoSecreto += 1;
		} else if (key === 'r' && estadoSecreto === 3) {
			estadoSecreto += 1;
		} else if (key === 't' && estadoSecreto === 5) {
			estadoSecreto += 1;
		} else if (key === 'o' && estadoSecreto === 6) {
			estadoSecreto += 1;
			alert('SECRETO MAGICO');
		} else {
			estadoSecreto = 0;
		}
		console.log(estadoSecreto);
	});
};
