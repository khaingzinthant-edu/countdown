// UI
const days = document.getElementById("days");
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let year = document.getElementById('year');

let countdown = document.getElementById('countdown');
let loading = document.getElementById('loading');

let currentyear = new Date().getFullYear();
// console.log(currentyear);

const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
// console.log(newyeartime);

year.textContent = currentyear+1;


function updatecountdown() {
    // console.log('hay');
    const currenttime = new Date();

    const diff = newyeartime - currenttime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    // console.log(d);

    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    // console.log(h);

    const m = Math.floor(diff / 1000 / 60) % 60;
    // console.log(m);

    const s = Math.floor(diff / 1000 ) % 60;
    // console.log(s);

    days.textContent = d;
    hours.textContent = h < 10 ? "0"+h : h;
    minutes.innerText = m < 10 ? "0"+m : m;
    seconds.innerText = s < 10 ? "0"+s : s;
}

setTimeout(()=>{
    loading.remove();
    countdown.style.display = "flex";
}, 1000);

setInterval(updatecountdown,1000);