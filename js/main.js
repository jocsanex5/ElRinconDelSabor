/*
	inicio

	js
	______________________
*/

	//mapa

	const tilesProvid = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

	const latitud = 15.31903828147736;
	const longitud = -87.99239644250434;

		let mymap = L.map('mapid').setView([latitud, longitud], 17);

		let marker = L.marker([latitud, longitud]).addTo(mymap);
    marker.bindPopup("<b>El Rincon del Sabor</b><br>Estamos aqui!!!.").openPopup();

   L.tileLayer(tilesProvid, {
        maxZoom: 18
    }).addTo(mymap);
	

window.addEventListener('load', ()=>{

	document.querySelector('.loader').classList.add('d-none');
})