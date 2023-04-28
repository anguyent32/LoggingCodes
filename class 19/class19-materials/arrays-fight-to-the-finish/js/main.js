//Create an array of movie titles. Loop through the array and addeach element to the h2.
let movies = ['Title1','Title2','Title3']
    //for loop
for (let i=0; i<movies.length; i++){
    document.querySelector('h2').innerText += movies[i]
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [10, 20, 30]
nums[0]=nums[0] + 3
    //forEach loop
nums.forEach((item,index) => { // always grab in same order: element, index, then array
    nums[i] = item + 3
})

//Find the average of all the numbers from question two
    // add all numbers and divide

let sum = 0

nums.forEach((num) => sum += num) // remember num inside forEach is grabing element =
                                    // saying "for each element (which is 10, 20,30) do function
                                    // of sum(0) + num (10/20/30)"

    // for Loop ver.
for (let i = 0 ; i <nums.length; i++){  //nums.length right now is = 3
    sum += nums[i] // same as sum = sum + nums[i]
}

console.log (sum/ nums.length )