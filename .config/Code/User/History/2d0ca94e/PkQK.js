//Create a mouse object that has four properties and three methods
let mouse = {}
mouse.shape ='oval'
mouse.color ='white'
mouse.brand = 'Logic'
mouse.wireless = true
mouse.model = 'MX SLide'

mouse.rightClick= function(){
    console.log('Right Click')
}
mouse.leftClick = function(){
    console.log('Left Click')
}
mouse.scroll = function(){
    console.log('Scrolling')
}

// ================ Constructor Ver. =============================

function Mouse(mouseShape, mouseColor, mouseBrand, mouseModel) {
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

let Logitech = new Mouse ('Round','White','Logi', 5)