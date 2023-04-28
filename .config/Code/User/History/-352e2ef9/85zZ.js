//Create an array of movies with at least three movies.
let movie = ['Movie1', 'Movie2','Movie3']
//Using the array from above, store the first movie in a variable
let movie1 = movie[0]
//Get the length of the original array and store it in a new variable
let movieLen = movie.length
console.log(movieLen) // 3 bcuz we have 3 elements in the array
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastArray = movie[movie.length - 1] // len give the numbers of element
            // or if it short use index let lastArray = movies[2]