const api = {
    key: '834c2ae38cefdca512c2bfc5629669b7',
    url:`http://api.openweathermap.org/data/2.5/forecast`
    // https://api.openweathermap.org/data/2.5/weather
}

const grados = document.getElementById('grados_Actual');
const clima = document.getElementById('clima_Actual');
const viento = document.getElementById('viento_Actual');
const amanecer = document.getElementById('amanecer_Actual');
const atardecer = document.getElementById('atardecer_Actual');
const humedad = document.getElementById('humedad_Actual');
const visibilidad = document.getElementById('visibilidad_Actual');
const fecha = document.getElementById('fecha_Actual');


async function search(objeto){
    try{
        const response = await fetch(`${api.url}?q=${objeto}&appid=${api.key}&lang=es`)
        const data = await response.json();
        grados.innerHTML = toCelsius(data.list[0].main.temp)+ '°C';
        // clima.innerHTML = data.list[0].weather[0].description;
        viento.innerHTML = data.list[0].wind.speed + ' KM/H';
        amanecer.innerHTML = data.city.sunrise + ' AM';
        atardecer.innerHTML = data.city.sunset + ' PM';
        humedad.innerHTML = data.list[0].main.humidity + ' %';
        visibilidad.innerHTML = data.list[0].visibility + ' M';
        console.log(data);
    }catch(err){
        console.log(err);
        alert('Hubo un error');
    }
}

 function toCelsius(kelvin){
     return Math.round(kelvin - 273.15);
}

function onSubmit(event){
    event.preventDefault();
    search(search_input.value);
}


const form = document.getElementById('search-form');
const search_input = document.getElementById('search_input');
form.addEventListener('submit', onSubmit, true);

