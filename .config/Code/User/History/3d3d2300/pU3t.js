//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(){
    let numOfSnacks = Number(document.querySelector('input').value)

    for (let i=1 ; 1 <= numOfSnacks; i++){
        document.querySelector('#stop').innerText += ' STOP!'
    }
}