const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function clockwork(){       //instruction is called clockwork
    const t = new Date();          // 
    console.log(t);                // instruction is 1) get time 
                                   // and let it be t
    setTimeout(clockwork, 1000);   
}

clockwork();