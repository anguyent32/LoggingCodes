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
    
}