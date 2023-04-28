//Arrays

//Create an array of tv shows. Loop through and print each show to the console

let tvShows = ['Smallville','Dark','Simpsons','WillTrent','Titans'].forEach((show)=> console.log(show))//you can change 'show' to _ 


//Create an array of numbers
let numArr = [1,2,3,4,5,6]
//Return a new array of numbers that includes every even number from the previous Arrays
let newArr = arr => arr.filter( n => n % 2 === 0)
    //here we have a function"newArr" and everything after the = is arrow function, the first 'arr' is a name for the parameter, then a filter is running on that 'arr
    // what filter does is set up new array and only filter in any element that is true
    // the new array aka "arr.filter ( --------) " is an implicit return which mean it go back to wher it was call: newArr(numArr)
console.log( newArr(numArr) )

//Create a function that takes in an array of numbers

//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[sorted.length - 2] )
}

sumSecondLowAndHigh([2,3,1,5,4])