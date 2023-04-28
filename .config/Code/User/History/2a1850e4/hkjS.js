//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
    //tried:
    // let num = [2,3,4,5,6]
    // let count = 0
    // num.forEach(x) => x + count  {
    //     alert(count)
    // }
        //AWS: BUT TRY TO DO WIT FOR LOOP and see.
let num = [2,3,4,5,6]
alert( num.reduce((acc,c) => acc + c, 0 ) )
    // both acc and c can be name anything like robot,dino
    // so everything inside the alert is going to 'reduce' down to a single number
    //reduce ONLY work on ARRAY, so num is an array. so reduce method will use the value in num array
    // the reduce going to run once each element in the num array. each element will be placed in c (current value) where acc(accumulation) start with 0.

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
        //tried:
        // function squaredNums(arr){
        //     return newArr = arr.forEach
        // }
        // Aws:
let newArr = num => num.map( num => num**2)// think of map = new array
        // right side: num.map (num => num**2) is an implicit return; only return this piece
//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = str => console.log( str.split('').reverse().join() )
        // .split = take string and turn into array, in this case into individual letter
        //.reverse = reverse individual letter
        //.join = turn the element of single letter of the array into a string

//Create a function that takes in a string
//Alert if the string is a palindrome or not
