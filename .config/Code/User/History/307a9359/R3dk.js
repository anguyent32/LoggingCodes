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

// Aws: 
function TonyHawkCharacter(chName, chStance, chSponsor, chMove){
    this.characterName = chName
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.flip = function (){
        console.log('Kickflip!')
    }
    this.taunt = function (){
        console.log(`Don't make me use my ${this.specialMove}!`)
    }
    this.grab = function (){
        console.log('Grabbing!')
    }
}

let kareemCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element','Bird')
// we use 'new' keyword because we making new object