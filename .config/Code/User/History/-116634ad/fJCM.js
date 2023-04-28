const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function Clockwork(){
    const t = new Date();
    setTimeout(Clockwork, 1000);
    console.log(t);
}

updateClock();