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
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest num is ${min} and highest num is ${max}`)
}/* the console.log is logging the template literal/ template string */

logHighandLow(100,50,25)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

        // function headOTail(){
        //     let result = Math.random()
        //     if(result <.5){
        //         return 'heads'
        //     }else{
        //         return 'tails'
        //     }
        // }
        // console.log( headOTail() )
//=======================Ternary is "?" Ver==========================
// arrow function,  _ is an empty parameter that not passing anything, and random is a method so you need a (), and we don't need an implicit 'return' in front of Math because it just does the return for you
const headsOrTails = _ => Math.random()<.5 ? 'heads' : 'tails'
// remember to call it or use it in the fucntion flipFlipFlipPhil in the results


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flipFlipFlipPhil (n){
    for(let i = 1; i<= n; i++){
        let results = headOTail()
        console.log(results)
    }
}

flipFlipFlipPhil(10)