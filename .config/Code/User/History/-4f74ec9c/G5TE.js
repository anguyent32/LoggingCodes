//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr (arr){     // create a function that pass in an array (bucket parameter called arr)
    let product = 1      // since we want to alert product, we made variable product that start out with 1 so it can start * w/ other numbers in array
    arr.forEach(num => product *= num) // in the array "arr", for e
    alert(product)
}

multiNumsInArr([10,3,4])
