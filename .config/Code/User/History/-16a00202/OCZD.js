
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
//------------ above is call EVENT LISTENER ---and the event is the click---//

//hey when look at doc., go get the ID of purple, and when you click on it, I want you to run this set "partyPurple" of instruction


//partPurple set of instruction//
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  //go back to the doc. find the body, and give it a background color.//
  document.querySelector('body').style.color = 'white'
  //go back again in doc. find body, and make the font color to white//
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgb(242, 242, 34)'
  document.querySelector('body').style.color = 'red'
}