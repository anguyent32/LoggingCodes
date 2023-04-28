const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")

function clockwork(){       //instruction is called clockwork
    
    const t = new Date();    // instruction say 1st get time
                             // and let it be t
    
    setTimeout(clockwork, 1000); //2nd register the "clockwork" function
                                 // as a whole parameter so it can be 
                                 // execute after 1000milliseconds =1s
                                 // "grab new date by convert at every 1s"
   
    // console.log(t);          // 3nd display t using console.log

    const hour = t.getHours()
    const minute = t.getMinutes()
    const second = t.getSeconds()
    // console.log(hour, minute, second);
    const hourDeg = (hour/12) * 360;
     
}   

clockwork(); // a call to START clockwork function