//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function arrToEvenArr (arr){
    let evenArr = []
    
    arr.forEach(n =>{
        if( n % 2 === 0 ){
            evenArr.push(n)
        }
    })

    return evenArr
}

console.log(arrToEvenArr ([1,2,3,4,5,6]))

let bestRap2020 = ['dylan','G','Polo']
let removeds = bestRap2020.push('Boy')
alert(bestRap2020)