/*
	Sobre nosotros

	js
	______________________
*/

	//slider de la pagina de informacion

	new Glider(document.querySelector('.glider'), {
		slidesToShow: 1,
		draggable: false,
		arrows: {
			prev: '.glider-prev',
			next: '.glider-next'
		}
	});


window.addEventListener('load', ()=>{

	document.querySelector('.loader').classList.add('d-none');
})