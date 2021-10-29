/*
	Página de contac

	js
	______________________
*/

window.addEventListener('load', ()=>{

	document.querySelector('.loader').classList.add('d-none');
})

//envió de correo
document.getElementById('form-contacto').addEventListener('submit', ()=>{

		document.querySelector('.msg').classList.remove('d-none');
})