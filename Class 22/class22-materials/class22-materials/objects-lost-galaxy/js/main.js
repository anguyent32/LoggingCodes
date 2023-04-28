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

function freshMouse(mouseShape, mouseColor, mouseBrand, mouseModel) {
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

let Logitech = new freshMouse ('Round','White','Logi', 5)

//or 

let macMouse = new freshMouse ('rectangular', 'Black', 'Intel', 3 )