//Write your pseduo code first! 
// 0 > 32
// document.querySelector('#convert').addEventListener('click',convert)

// function convert() {
//     // need the value that is in celcius
//     let temp = document.querySelector('#cel').value
//     // convert crom celsius to fahreiheit
//     temp = temp*9/5 + 32
//     // show it
//     document.querySelector('#placeToSee').innerText = temp
//}

document.querySelector('#convert').addEventListener('click', convert)

function convert(){
   let temp = document.querySelector('#cel').value
   temp = temp*9/5 +35
   document.querySelector('#placeToSee').innerText = temp
}