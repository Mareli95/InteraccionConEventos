window.onload = function () {
	let titulo = document.querySelector('.moviesAddTitulo');
	let formulario = document.querySelector('#formulario');
	let article = document.querySelector('article');
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
};
