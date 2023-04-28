//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(punch, kick, catchPhrase, specialMove){
    this.punch = punch
    this.color = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function(){
        console.log (`Come over here and take my ${this.specialMove}`)
    }
    this.winning = function(){
        console.log (`Haha! ${this.catchPhrase}`)
    }

    this.dash = function (){
        console.log ('Swoosh')
    }
}
