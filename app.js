//Declaro un objeto para guardar la llave y el url de la API
const api = {
    key: '834c2ae38cefdca512c2bfc5629669b7',
    url:`http://api.openweathermap.org/data/2.5/forecast`
}
   
//Elementos del DOM
const grados = document.getElementById('grados_Actual');
const clima = document.getElementById('clima_Actual');
const viento = document.getElementById('viento_Actual');
const amanecer = document.getElementById('amanecer_Actual');
const atardecer = document.getElementById('atardecer_Actual');
const humedad = document.getElementById('humedad_Actual');
const visibilidad = document.getElementById('visibilidad_Actual');
const fecha = document.getElementById('fecha_Actual');
const temperaturaMinima = document.getElementById('temperature_Min_Actual');
const temperaturaMaxima = document.getElementById('temperature_Max_Actual')
const presion = document.getElementById('presion_Actual');
//Funcion General
async function datosActual(objeto){
    try{
        const response = await fetch(`${api.url}?q=${objeto}&appid=${api.key}&lang=es`)
        const data = await response.json();
        console.log(data);
        //Muesto los valores al HTML
        data.innerHTML = (new Date ()).toLocaleDateString();
        grados.innerHTML = toCelsius(data.list[0].main.temp)+ '°C';
        viento.innerHTML = data.list[0].wind.speed + ' KM/H';
        amanecer.innerHTML = data.city.sunrise + ' AM';
        atardecer.innerHTML = data.city.sunset + ' PM';
        humedad.innerHTML = data.list[0].main.humidity + ' %';
        visibilidad.innerHTML = data.list[0].visibility + ' M';
        temperaturaMaxima.innerHTML = toCelsius(data.list[0].main.temp_max) + '°C Max';
        temperaturaMinima.innerHTML = toCelsius(data.list[0].main.temp_min) + '°C Min';
        presion.innerHTML =  data.list[0].main.pressure + ' Pa';
        // datosSemanales(lat , lon);
        // displayBackgroundImage(data);
    }catch(err){
        console.log(err);
        alert('Hubo un error');
    }
}
//Funcion datos de la semana proxima
// async function datosSemanales(lat , lon){
//     const response = await fetch(`${api.url}?q=${objeto}&appid=${api.key}&lang=es`)
//     const data = await response.json();
//     try{
//         console.log(data);
//         data.daily.forEach(function(dayInfo , index){
//             let grados_Actual = document.getElementById('grados_Actual' + index);
//             let grado =(dayInfo.temp.day).toString();
//             grados_Actual.innerHTML = grados + ' °C';
//         })
//     }catch(err){
//         console.log(err);
//         alert('Hubo un error');
//     }
// }



//Funcion para convertir los grados
 function toCelsius(kelvin){
     return Math.round(kelvin - 273.15);
}

function onSubmit(event){
    event.preventDefault();
    datosActual(search_input.value);
}
const form = document.getElementById('search-form');
const search_input = document.getElementById('search_input');
form.addEventListener('submit', onSubmit, true);

const displayBackgroundImage = (obj) =>{
    // console.log(obj.list[4].dt); //No me extrae la hora
     //Extraer la hoa del obj que contiene los datos del tiempo
     let dateArgentina = new Date(data.list[0].dt_txt*1000).toLocaleString('es-AR',{
         timeStyle: 'short',
         dateStyle: 'long'
     });
     console.log(dateArgentina)
     //convertirlo a una hora que nosotros entendamos
     //Manipular el DOM para incluir la hora
    date.textContent = `Actualizacion ${dateArgentina}`

     //extraer la hora
     const dayHour = new Date(obj.list[4].dt_txt*1000).getHours();
     console.log(dayHour);
     //logica
 }