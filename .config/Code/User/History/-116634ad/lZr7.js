const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function updateClock(){
    const t = new Date();
    setTimeout(updateClock, 1000);
    console.log(t);
}

updateClock();