//Create a dog object that has four properties and three methods
let dog = {}

dog.breed = 'akita'
dog.color = 'brown'
dog.legs = 4
dog.name = 'Oppo'

dog.bark = function(){
    console.log('Woof!')
}

dog.jump = function(){
    console.log('Over the moon!')
}

dog.fetch = function(){
    console.log('Caught the stick!')
}

// if I do another dog I have to do the above all over again, BUT I can use Constructor

