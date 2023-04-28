//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr (arr){
    let product = 1
    arr.forEach(num,indx => product *= num)
    alert(product,indx)
}

multiNumsInArr([10,3,4])
