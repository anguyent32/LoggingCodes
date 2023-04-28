
document.querySelector('#check').addEventListener('click', check)

function check() {

  const dayAnswered = document.querySelector('#day').value
  day = dayAnswered.toLowerCase();
  //Conditionals go here
  if(day === "tuesday" || day === "thursday" ){
    const classday = "It's a Coding DAY! I am a BADdie, I write BAD code!"
    document.querySelector(classday).style.color = 'forestgreen'
    document.querySelector('#placeToSee').innerText = classday
  }else if(day === "saturday" || day === "sunday"){
    const weekends = "It's a Weekend!"
    document.querySelector('#placeToSee').innerText = weekends
  }else{
    const workdays = "It's simply a Work days! :("
    document.querySelector('#placeToSee').innerText = workdays
  }

}


