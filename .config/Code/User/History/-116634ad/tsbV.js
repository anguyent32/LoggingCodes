// USING setTimeout

// const hrEl = document.querySelector(".hour")     //grab the hour piece and label it as hrEl
// const minEl = document.querySelector(".minute")  //grab the min piece and label it as minEl
// const secEl = document.querySelector(".second")  //grab the sec piece and label it as secEl

// function clockwork(){       //instruction is called clockwork
    
//     const t = new Date();    // instruction say 1st get time
//                              // and let it be t
    
//     setTimeout(clockwork, 1000); //2nd register the "clockwork" function
//                                  // as a whole parameter so it can be 
//                                  // execute after 1000milliseconds =1s
//                                  // "grab new date by convert at every 1s"
   
//     console.log(t);          // 3nd display t using console.log

//     const hour = t.getHours()
//     const minute = t.getMinutes()
//     const second = t.getSeconds()
//     // console.log(hour, minute, second);
//     const hourDeg = (hour/12) * 360;
//     hrEl.style.transform = `rotate(${hourDeg}deg)`;
//     const minuteDeg = (minute/60) * 360;
//     minEl.style.transform = `rotate(${minuteDeg}deg)`;
//     const secondDeg = (second/60) * 360;
//     secEl.style.transform = `rotate(${secondDeg}deg)`;
// }   

// clockwork(); // a call to START clockwork function

//______________________________________________________________


// USING setInterval

const hrEl = document.querySelector(".hour")
const minEl = document.querySelector(".minute")
const secEl = document.querySelector(".second")
setInterval(clockwork, 1000) // a call to START clockwork function
function clockwork(){       //instruction for clockwork is:
    
    const t = new Date();    // 1st grab computer real time/date and let it be t
    
    // setTimeout(clockwork, 1000);    //2nd register the "clockwork" function
                                    // as a whole parameter so it can be 
                                    // execute after 1000milliseconds =1s
                                    // "grab new date by convert at every 1s"
   
    // console.log(t);          // 3nd display t using console.log

    const hour = t.getHours()
    const minute = t.getMinutes()
    const second = t.getSeconds()
    // console.log(hour, minute, second);
    const hourDeg = (hour/12) * 360;
    hrEl.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute/60) * 360;
    minEl.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second/60) * 360;
    secEl.style.transform = `rotate(${secondDeg}deg)`;
}   

// setInterval(clockwork, 1000) // a call to START clockwork function