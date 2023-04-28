//--- Easy
//create a variable and assign it a number
let num = 1
//minus 10 from that number
num = num - 10
//print that number to the console
console.log(num) // *NOTICE*: log(num) is a function call that call the function log and num is an argument
//--- Medium
//create a variable that holds a value from the input
let inputedVal = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputedVal = inputedVal + 25 // *NOTICE*:when adding numer to empty string, it becaome string
        // or inputVal += 25 just different syntax
//alert that number
// alert(inputedVal)   //alert() is a function "call"(cuz alert passing in a value; that value is the argument)
                    // that is built in; so it's a method = a funciton tied to an object
    //"calling function to argument with mom" 

    // function alert(x){ this x is a parameter
    //  X parameter can b use in the function
    // } 
    // when using function declaration, x is parameter
//--- Hard

//create a variable that holds the h1
const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1Holder.addEventListener('click', sum)

function sum(){
    console.log(num + Number(inputedVal))
}