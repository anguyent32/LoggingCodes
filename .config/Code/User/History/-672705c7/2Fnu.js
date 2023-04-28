
document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  
  //Conditionals go here
  if(day === "Tuesday" || day === "Thursday" ){
    const classday = "It's a Tuesday DAY!!'
    document.querySelector('#placeToSee').innerText = classday
  }else if(day === "Saturday" || day === "Sunday"){
    alert('Weekend!')
  }else{
    alert('BORRRRRRINNNNNGGGGG!!!')
  }

}


