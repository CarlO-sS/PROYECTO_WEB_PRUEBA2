$(document).ready(function(){
    $('#datosDelClima').hide();

});

function cargar_clima(){

    var clima = new XMLHttpRequest();
    var ciudad = document.getElementById("ciudad").value;

    clima.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=8fefcdc4f65e87fdd7c08f9e34215dc5&units=metric', false);
    clima.send(null);

    var datos = JSON.parse(clima.response);

    var ciudad = datos.name;
    var temperatura = datos.main.temp_min;
    var humedad = datos.main.humidity;
    var velocidadViento = datos.wind.speed;

    $('#ubicacion').html(ciudad);
    $('#temperatura').html(temperatura);
    $('#humedad').html(humedad);
    $('#velocidadviento').html(velocidadViento);

    $('#ciudad').val('');

    $('#datosDelClima').show();

}