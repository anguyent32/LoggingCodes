//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function ProSkater (skaterBoard, skaterShoes, skaterExperiences, skaterHeight){
    this.board = skaterBoard
    this.shoes = skaterShoes
    this.experiences = skaterExperiences
    this.height = skaterHeight
    this.flip = function (){
        console.log('Flipped!')
    }
    this.swist = function (){
        console.log('Swisted!')
    }
    this.jump = function (){
        console.log('Jumpped!')
    }

}