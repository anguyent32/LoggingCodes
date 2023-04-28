//Arrays

//Create an array of tv shows. Loop through and print each show to the console

let tvShows = ['Smallville','Dark','Simpsons','WillTrent','Titans'].forEach((show)=> console.log(show))//you can change 'show' to _ 


//Create an array of numbers
let numArr = [1,2,3,4,5,6]
//Return a new array of numbers that includes every even number from the previous Arrays
let newArr = arr => arr.filter( n => n % 2 === 0)
    //here we have a function"newArr" and everything after the = is arrow function
console.log( newArr(numArr) )

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
