//Create a conditonal that checks their age
//If under 16, tell them they can not drive
// if (age<16){
//     alert('cannot drive');
//If under 18, tell them they can't hate from outside the club, because they can't even get in
// }else if (age<18){
//     alert('')
// }

//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 16
if (age < 16){
    console.log('cannot drive')
}else if(age < 18 ){
    console.log('cannot hate from outside the club, because they cannot even get in')
}else if(age < 21 ) {
    console.log('cannot drink')
}else if(age < 25 ){
    console.log("they cannot rent cars affordably")

}else if(age < 30 ){
    console.log("they can not rent fancy cars affortably")

}else if(age >= 30 ){
    console.log("there is nothing left to look forward to wihich is a lie-100dev")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
