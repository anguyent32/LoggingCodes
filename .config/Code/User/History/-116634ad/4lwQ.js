const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function clockwork(){
    const t = new Date();
    setTimeout(clockwork, 1000);
    console.log(t);
}

updateClock();