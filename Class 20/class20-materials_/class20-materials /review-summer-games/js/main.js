//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr (arr){     // create a function that pass in an array (bucket parameter called arr)
    let product = 1      // since we want to alert product, we made variable product that start out with 1 so it can start * w/ other numbers in array
    arr.forEach(num => product *= num) // in the array "arr", for each, get the element (can add index and arrays w/ ,index, array) and put it in num; THEN, multiply product and num 
    alert(product)// when the loop of the array each the end, alert the product
}

multiNumsInArr([10,3,4]) //call function by putting in the array

/*============== TRADITIONAL FOR LOOP ======================*/

function multiNumsOfArr (ray){
    let product = 1
    for(let i = 0; i < ray.length; i++){
        product *= ray[i]
    }

    alert(product)
}

multiNumsOfArr([10,3,4])