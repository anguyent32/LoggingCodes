// *Variables*
// Create a variable and console log the value

// let x=0
// console.log(x)

// Create a variable, add 10 to it, and alert the value

// let y = 2
// y=y+10
// alert(y)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

document.querySelector('#subtract').addEventListener('click', subtractNumbers)
const num1 = document.querySelector('#ans1Here')
const num2 = document.querySelector('#ans2Here')
const num3 = document.querySelector('#ans3Here')
const num4 = document.querySelector('#ans4Here')

function subtractNumbers(num1, num2, num3, num4) {
    const result = num1 - num2 - num3 - num4
    document.getElementById('#result').innerText = result
    alert(result)
  }


// Create a function that divides one number by another and returns the remainder



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


