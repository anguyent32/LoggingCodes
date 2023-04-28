const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock, 1000);
    console.log(currentDate);
}
