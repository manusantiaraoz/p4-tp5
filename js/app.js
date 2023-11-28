
const fecha = document.querySelector(".fecha");
const hora = document.querySelector('.hora');





function verFecha (){
  let dia = new Date();
let numeroDia =dia.getDate();
let diaSemana =dia.getDay();
let semana =["Domingo","Lunes","Martes","Miercoles", "Jueves","Viernes", "Sabado"];
let anio =dia.getFullYear();
let mes = dia.getMonth();
let meses = ["Enero","febrero","marzo","abril","mayo","Junio", "Julio", "Agosto", "Septiembre","Octubre","noviembre", "Diciembre"]
  fecha.innerHTML= `${semana[diaSemana]} ${numeroDia}  ${meses[mes]}  ${anio} `;
}


setInterval(verFecha(),3600000);

setInterval(function(){
  hora.innerHTML = verTiempo();
}, 1000);

function verTiempo() {
    let tiempo = new Date();
    let horas = tiempo.getHours() > 12 ? tiempo.getHours() - 12 : tiempo.getHours();
    horas === 0 ? horas = 12 : horas = horas;
    if (horas<10){
      horas = "0"+ horas;
    }

    let minutos = tiempo.getMinutes() < 10 ? '0' + tiempo.getMinutes() : tiempo.getMinutes();
    let segundos = tiempo.getSeconds() < 10 ? '0' + tiempo.getSeconds() : tiempo.getSeconds();
    let ampm = tiempo.getHours() >= 12 ? 'PM' : 'AM';
    var currentTime = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
    return currentTime;
}