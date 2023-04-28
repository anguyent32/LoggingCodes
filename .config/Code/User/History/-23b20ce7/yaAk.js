// *Variables*
// Create a variable and console log the value

let num = 10
console.log(num)

// Create a variable, add 10 to it, and alert the value
let nums = 0
// nums = nums + 10
alert(nums+10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub4NumAlert(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}

sub4NumAlert(10,3,2,1)


// Create a function that divides one number by another and returns the remainder
function modulusAndReturn(m1,m2){
    return(m1 % m2)
}

// modulusAndReturn(15,7) /* Why when I do this one and only alert(modulusAndReturn) it would not work
alert(modulusAndReturn(15,7))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function alertJumanji(j1,j2){
    let addedNum =  j1 + j2 /* *NOTE* you can shorted it by not declare and directly go into condition of if (j1+j2 >50){do stuff}*/
    if (addedNum > 50){        /*if (j1+j2 >50) { alert('Jumanji')}*/
        alert('Jumanji')
    }
}

alertJumanji(30,40)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mul3NumAlertModulus3(p1,p2,p3){
    let product = p1*p2*p3
    if(product%3 === 0 ){
        alert('ZEBRA')
    }
}

mul3NumAlertModulus3(1,2,6)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordXTimes(word,num){   /*pseudo-code keywords: function name is what action verb you want it do and parameters is what is pass/take in*/
    for(let i=1; 1<=num; i++){      /*if we want something repeat multiple times use loop*/
        
    }                               
}



/*======================================================================================
            ANSWERS
======================================================================================*/
// *Variables*
// Create a variable and console log the value
                                                            //    let num = 10
                                                            //    console.log(num)

// Create a variable, add 10 to it, and alert the value
                                                            //    let secondNum = 20
                                                            //   secondNum = secondNum + 10
                                                            //    alert(secondNum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

                                                            //    function subFourNumAndAlert(n1, n2, n3, n4){
                                                            //            alert(n1-n2-n3-n4)
                                                            //        }

                                                            //        subFourNumAndAlert(5,4,3,2)
// Create a function that divides one number by another and returns the remainder

                                                            //        function getTheRemainder(n5,n6){
                                                            //            return n5 % n6
                                                            //        }
                                                            //
                                                            //        console.log( getTheReminder(12,3) )

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

                                                            //    function addTwoAlertJumanji(n7,n8){
                                                            //        if(n7 + n8 > 50){
                                                            //            alert('Jumanji')
                                                            //        }
                                                            //    }

                                                            //    addTwoAlertJumanji(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

                                                            // function mulThreeAndCheckDivByThree(n9,n10,n11){
                                                            //    let product = n9 * n10 * n11
                                                            //    if(product % 3 === 0){
                                                            //        alert('ZEBRA')
                                                            //    }
                                                            //}

                                                            // mulThreeAndCheckDivByThree(3,3,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
i
                                                            // function logWordXTimes(word,num){
                                                            //     for(let i=1; i<= num; i++){
                                                            //         console.log(word)
                                                            //     }
                                                            // }

                                                            // logWordXTimes('wonderful',21)

