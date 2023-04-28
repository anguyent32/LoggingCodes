// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console = so we make a string sentence and trying to remove all spaces between the words and ''

            // let favDrink = 'RootBeer'
            // console.log(favDrink)
let faveDrink = ' Diet Vanilla Coke From Friendlys '
faveDrink = faveDrink.trim()
console.log(faveDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

        let str = 'orange and apple are juices for little kids'

        // console.log( str.search('apple')) // will return index, if not in there it will PRINT (-1)
    // we can do an 'if' to ask if it in the string or not
    if (str.search('apple')!== -1){
        console.log('YES')
    }else{
        console.log('NO')
    }
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function randomRocPaSis() {
    let random = Math.random()
    if(random<.33){
        return 'ROCK'
    }else if(random<.66 ){
        return 'PAPER'
    }else{
        return 'SCISSOR'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
