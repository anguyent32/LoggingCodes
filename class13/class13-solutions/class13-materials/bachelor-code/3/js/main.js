


// const contestants = document.querySelectorAll('.contestant')
// // in the DOM, grab all the class of contestant. and stored 
// // in a const variable called contestants
// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))
// // line above let us put eventlistener on every single contestants
// // forEach is a method that give us a loop; we going to loop through each contestant and add eventlistener to it
// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 	// hey, we passing the click into this function,
// 	// look at the target of that click (what the user clicked on)
// 	// if the thing that the user click on has a class of rose
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }

const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
