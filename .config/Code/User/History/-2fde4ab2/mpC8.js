// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoli = 'christmas'
favHoli = favHoli.toUpperCase()
console.log(favHoli)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let favRangers ='Alien Rangers'
alert(favRangers.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function sub5AndAbs(n1,n2,n3,n4,n5){
    let difference = 100 - n1 - n2 - n3 - n4 - n5
    alert(Math.abs(difference));
}

sub5AndAbs (27,83,42,1,5)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function logHighandLow(n1,n2,n3){
    let min = Math.min(n1,n2.n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest num is ${min} and highest num is ${max}`)
}

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
