

/*Arrays*/
//Create and array of numbers. Sum all of the numbers. Alert the sum.
        // - we can do this with for loop, but let try reduce method
        let listNums = [ 2, 4, 6, 8]
        let sum = listNums.reduce( (acc,c) => acc + c, 0) // acc = accumulator & c = current 
        // We using the .reduce() method; it grabs few values: 1. accumulator 2. current. so the arrow function going to add the acc to c. SO, Everytime this run, I want to add something(from array) to accumulation, but at the start of this function we want to start with a value so there is a ',0' after acc + c to indicate the initial value of accumulator.
            // so the first time this run, acc = 0 and c = 2, then 0 + 2 , then first run (acc?) end with 2
            // run again, acc = 2 and c = 4, then 2 + 4, end with 6
            // etc...end with 20. SO sum = 20 
        alert(sum)// now this function can work with any arthimatic but remember when * and / start with 1 not 0 



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared



//Create a function that takes string
//Print the reverse of that string to the console



//Create a function that takes in a string
//Alert if the string is a palindrome or not
