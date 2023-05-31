// To refer the HTML canvas Element visit
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

const canvas = document.querySelector('#draw')

// Attribute to get the HTMLCnvasElement
const ctx = canvas.getContext('2d')

// specify the properties of the getcontext for 2d
ctx.strokeStyle = '#dc143c'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100

// create few variables to support the logic to draw on the canvas

// This allows to operate how to draw on a canvas 
let isDrawing = false

// These are the properties of the mouse eventlistners
let lastX = 0
let lastY = 0

// This is to set the properties or display of the colors
let hue = 0

// This is to set the direction of the drawing on the canvas
let direction = true

function draw(e){
    // stop the fn from running when they are not moused down
    if (!isDrawing) return;
    // console.log(e)
     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    //  Start from
    ctx.beginPath()
    // Move to 
    ctx.moveTo(lastX, lastY)
    // this moves accoring to the event properties //can check offset and last X and Y properties in the console of event property
    ctx.lineTo(e.offsetX, e.offsetY)
    // This method helps to draw on the canvas
    ctx.stroke()

    // Set properties of lastX and lastY to offsetX and offsetY
    lastX = e.offsetX
    lastY = e.offsetY
    // Increment the hue color every time the line is dragged
    hue++
    if(hue >= 360){
        hue = 0
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction
    }
    if(direction){
        ctx.lineWidth++
    }else{
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)