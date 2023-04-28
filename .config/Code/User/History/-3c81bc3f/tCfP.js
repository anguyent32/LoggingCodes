
//  1. Write a loop that makes seven calls to console.log to output the # triangle:

// for(let i = "#"; (i.length)<8; i +="#"){
// 	console.log(i)
// }


// 2. print all the numbers from 1 to 100

// for(let i = 1; Number(i)<=100 ; i++){

// //     // For numbers divisible by 3, print "Fizz"
//     if(i % 3 === 0 && 1 % 5 === 0){
//         console.log('FizzBuzz')
//     }

// //     // for numbers divisible by 5 (and not 3), print "Buzz"
//     else if(i % 5 === 0){
//         console.log('Buzz')
//     }
// //     // For numbers divisible by both 3 and 5, print "FizzBuzz"

//     else if(i % 3 === 0){
//         console.log('Fizz')
//     }

//     // For number that not divisible by neither, print the continuing number counting
//     else{
//         console.log(i)
//     }
// }

//  2. ANS:
// for(let i = 1; Number(i)<=100 ; i++){
//     if(i % 3===0 && i % 5===0){ // or use i % 15 === 0
//         console.log('FizzBuzz')
//     }else if(i % 5===0){
//         console.log('Buzz')
//     }else if(i % 3===0){
//         console.log('Fizz')
//     }else{
//         console.log(i)
//     }
// }


// CHESSBOARD

// let size = 8;
// let hash = "";

// for (let i = 0; i < size; i++){       //looping column (going down)
//     for( let j = 0; j < size; j++){   // based on the outer 1st for loop, this is 8x of looping the row (creating checker until x8 and newline)
//         if((i+j) % 2 === 0){            // created a condition to place a hash vs a space
//             chessboard +=' ';
//         }else{
//             chessboard += '#';
//         }
//     }
//     chessboard += "\n";         //the 2nd command body of the outer for loop, which will auto
//                                 // run after inner 2nd for loop finished
// }

function sayHello (firstName, lastName){
    return "Hello ${firstName} ${lastName}!";
}

let firstName = prompt("What is your first name?");
let lastName = prompt ("What is your last name?");

alert(sayHello(firstName, lastName));