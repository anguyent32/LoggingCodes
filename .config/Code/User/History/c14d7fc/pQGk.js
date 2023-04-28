// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const str = 'Is this sentence considered to be a string?'
alert(str.endsWith('?')) // it will alert 'true' value if it end with '?'
        // breaking down: alert() is method; str.endsWith('?') is an argument; endsWith() is method using on a string 'str'

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let str2 = 'I am looking for jr. dev positions.'
console.log(str2.replaceAll('jr. dev', 'software engineering'))
        // .replaceAll method take in 2 values: what u want to replaced and what put in as replacement


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function RocPapSis(){
    let random = Math.random()
    if (random <.33){
        return 'rock'
    }else if (random <.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin (playerChoice){
    let botChoice = RocPapSis()
    if ((playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('Winner!')
    }else if (playerChoice === botChoice){
        console.log('You Tied!')
    }else {
        console.log('Loser!')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
