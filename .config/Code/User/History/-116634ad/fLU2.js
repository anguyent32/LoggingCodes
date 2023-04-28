const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function clockwork(){       //instruction is called clockwork
    
    const t = new Date().getHours;    // instruction say 1st get time
                             // and let it be t
   
    console.log(t);          // 2nd console.log it to display t
    
    setTimeout(clockwork, 1000); //3rd register the "clockwork" function
                                 // as a whole parameter so it can be 
                                 // execute after 1000milliseconds =1s
}

clockwork(); // a call to START clockwork function