const api = {
    key: '834c2ae38cefdca512c2bfc5629669b7',
    url:`http://api.openweathermap.org/data/2.5/forecast`
    // https://api.openweathermap.org/data/2.5/weather
}

var grados = document.querySelector('grados_Actual');
var clima = document.querySelector('clima_Actual');
var viento = document.querySelector('viento_Actual');
var amanecer = document.querySelector('amanecer_Actual');
var atardecer = document.querySelector('atardecer_Actual');
var humedad = document.querySelector('humedad_Actual');
var visibilidad = document.querySelector('visibilidad_Actual');
var fecha = document.querySelector('fecha_Actual');


async function search(objeto){
    try{
        const response = await fetch(`${api.url}?q=${objeto}&appid=${api.key}&lang=es`)
        const data = await response.json();
        

        console.log(data);
    }catch(err){
        console.log(err);
        alert('Hubo un error');
    }
}

// function toCelsius(kelvin){
//     return Math.round(kelvin - 273.15);
// }

function onSubmit(event){
    event.preventDefault();
    search(search_input.value);
}
const form = document.getElementById('search-form');
const search_input = document.getElementById('search_input');
form.addEventListener('submit', onSubmit, true);

