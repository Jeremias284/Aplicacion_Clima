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


//Convierto la hora para que se pueda entender
const funcionAmanecer = (horaAmanecer)=>{
    //Hora amanecer
    let datosAmanecer = new Date(horaAmanecer.city.sunrise*1000).toLocaleString('es-AR',{
        timeStyle: 'short',
        dateStyle: 'long'
    });
    console.log(datosAmanecer);
    const dayHour = new Date(horaAmanecer.city.sunrise*1000).getHours();
    console.log(dayHour);

    amanecer.textContent = `${dayHour}  AM`;
}

//Convierto la hora para que se pueda entender
const funcionAtardecer = (horaAtardecer) => {
      //Hora atardecer
      let datosAtardecer = new Date(horaAtardecer.city.sunset*1000).toLocaleString('es-AR',{
        timeStyle: 'short',
        dateStyle: 'long'
    });
    console.log(datosAtardecer);
    const dayHourss = new Date(horaAtardecer.city.sunset*1000).getHours();
    console.log(dayHourss);

    atardecer.textContent = `${dayHourss} PM`;
}


//Funcion General
async function datosActual(objeto){
    try{
        const response = await fetch(`${api.url}?q=${objeto}&appid=${api.key}&lang=es`)
        const data = await response.json();
        console.log(data);
        //Muesto los valores al HTML
        grados.innerHTML = toCelsius(data.list[0].main.temp)+ '°C';
        viento.innerHTML = data.list[0].wind.speed + ' KM/H';
        humedad.innerHTML = data.list[0].main.humidity + ' %';
        visibilidad.innerHTML = data.list[0].visibility + ' M';
        temperaturaMaxima.innerHTML = toCelsius(data.list[0].main.temp_max) + '°C Max';
        temperaturaMinima.innerHTML = toCelsius(data.list[0].main.temp_min) + '°C Min';
        presion.innerHTML =  data.list[0].main.pressure + ' Pa';
        funcionAmanecer(data);
        funcionAtardecer(data);
    }catch(err){
        console.log(err);
        alert('Hubo un error');
    }
}

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

//Funcion datos de la semana proxima
// async function datosSemanales(lat , lon){
//     const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&appid=834c2ae38cefdca512c2bfc5629669b7')
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