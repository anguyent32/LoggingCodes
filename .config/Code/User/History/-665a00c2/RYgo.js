//Create a function that has a loop that prints '21' 21 times to the console and then call that function
    // function savage21(){
    //     for(let i = 1; i < 22 ; i++){
    //     console.log('21')
    //     }
    // }

    // savage21()
//Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22 ; i++){
        document.querySelector('#savageSays').innerText += "21" // this just mean the "21" that appear first is just an added in string 
    }                                                           // so the next loop will concatinate the next "21" with the old "21"
}

savage21()