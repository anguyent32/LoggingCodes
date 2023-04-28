//---Easy
//create a function that subtracts two numbers and alerts the difference
function subNum(num1, num2){
    alert(num1 - num2)
}

// subNum(50,30)
// subNum(100,33)
//create a function that divides three numbers and console logs the quotient
// function divNum(num1, num2, num3){
//     console.log(num1 / num2 / num3)
// }
// divNum(12,4,3)

 
//create a function that multiplys three numbers and returns the product
function multiNum(num1, num2, num3){
    return num1*num2*num3 //return is not a function(it a keyword that tell it to spit out the answer and return the value to whereever it was called)
}
// let product  = multiNum(5,10,2)

// alert(product) //* start at line 20: those arguments sent(called) into the parameters of function multiNum
              // and did the multification and returned to line 20 (which just return the answer back to where it was call)
              // which it not going to show anywhere visually, so we can first declare it on line 20 and alert
              // the variable on line 22


function turnIntoMoney(){
    let product = multiNum(5,10,2)
    alert('$' + product)
}

turnIntoMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
