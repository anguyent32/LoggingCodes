//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size = 'large'

//=======method=========

stopwatch.start = function(){
    console.log('starting!')
}

stopwatch.stop = function(){
    console.log('Stop!!!')
}

stopwatch.sayBrand = function(){
    console.log( stopwatch.brand )
}