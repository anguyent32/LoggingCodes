//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(figherGender, fighterSize, fighterModel, fight, mouseModel) {
    this.shape = mouseShape
    this.color = mouseColor
    this.brand = mouseBrand
    this.model = mouseModel
    this.click = function(){
        alert('click click click')
    }
    this.slide = function(){
        alert(`Sliding the mouse to ${this.model} the Model.`)
    }
}
