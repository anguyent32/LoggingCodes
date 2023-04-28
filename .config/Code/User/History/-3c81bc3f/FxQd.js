
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


// Improved Hello!

// function sayHello (num, num2){
//     return num+num2
// }

// let firstName = prompt("What is your first name?");
// let lastName = prompt ("What is your last name?");
// let num = Number(prompt ('pick your first number'));
// let num2 = Number(prompt ('pick your second number'));

// console.log(sayHello(num, num2));

//==========================================================

// Number Squaring 

// function square1 (x){
//     return x*x;
// }

// console.log(square1(1))
                            // function square1(x) {
                            //     for (let x = 0; x<=10; x++){
                            //         console.log(x*x);
                            //     }
                            // }

                            // square1()


    // const square2 = x => console.log(x*x)
    // square2()

function oddAndEvenPedal(flower1,flower2) {
    if (flower1%2===0 && flower2%2!==0){
        
    }
}