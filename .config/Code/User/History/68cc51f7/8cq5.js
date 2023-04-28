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
  }


// Create a function that divides one number by another and returns the remainder



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


//Replace Function Expressions with arrow functions in the code below:

    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
    }
    //above is a callback function
    ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
    );
    // above is function expression because the is a semicolon at the end












    
        //Solution
        // function ask(question, yes, no) {
        //     if (confirm(question)) yes();
        //     else no();
        //   }
          
        //   ask(
        //     "Do you agree?",
        //     () => alert("You agreed."),
        //     () => alert("You canceled the execution.")
        //   );
