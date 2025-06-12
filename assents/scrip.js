const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const clock = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();    
    let s = dateToday.getSeconds();
     
    horas.textContent = h < 10 ? "0" + h : h;
    minutos.textContent = m < 10 ? "0" + m : m;        
    segundos.textContent = s < 10 ? "0" + s : s;
    
}, 1000);
