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

document.querySelector('#subtract').addEventListener('click', subtract)

function subtract(num1, num2, num3, num4) {
    alert (document.querySelector('#ans1Here').value -
     document.querySelector('#ans2Here').value -
    document.querySelector('#ans3Here').value -
     document.querySelector('#ans4Here').value);
  }

// Create a function that divides one number by another and returns the remainder



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA


//Replace Function Expressions with arrow functions in the code below:

    // function ask(question, yes, no) {
    //     if (confirm(question)) yes();
    //     else no();
    // }
    //above is 1st part of a callback function; it's the function ask(question,yes,no);
    // with three parameters: question, yes function, and no function
    // ask(
    //     "Do you agree?",
    //     function() { alert("You agreed."); },
    //     function() { alert("You canceled the execution."); }
    // );
    // above is function expression because the is a semicolon at the end

    // function showOk() {
    //     alert( "You agreed." );
    // }
    // function showCancel() {
    //     alert( "You canceled the execution." );
    // }
    //   // usage: functions showOk, showCancel are passed as arguments to ask
    // ask("Do you agree?", showOk, showCancel);
    
    //above is the 2nd part of callback function


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
