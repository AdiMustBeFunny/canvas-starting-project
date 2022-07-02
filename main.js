const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
})





function loop(){
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillText('HTML Canvas', mouse.x, mouse.y)

    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
