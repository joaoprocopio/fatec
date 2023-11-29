const maxParticles = 300
let numParticles = 0
const particles: Particle[] = []
const collisionDamper = 0.1

const canvas = document.getElementById("rain") as HTMLCanvasElement
const context = canvas.getContext("2d") as CanvasRenderingContext2D

canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.strokeStyle = "#C4D3DF"

interface Axis {
  x: number
  y: number
}
interface Coordinates extends Axis {
  z: number
}

class Particle {
  id: number = Date.now()
  removed: boolean = false
  removeParticle: boolean = false
  position: Axis = {
    x: 0,
    y: 0
  }
  velocity: Axis = {
    x: 0,
    y: 0
  }
  length: number = 10
  lineWidth: number = 1
  acceleration: Axis = {
    x: 0,
    y: 0
  }

  constructor() {
    this.setParticle()
  }

  setParticle() {
    this.position = {
      x: 40 + Math.random() * (canvas.width - 40),
      y: -10 - Math.random() * 50
    }
    this.lineWidth = 1 - this.position.y / 120
    this.acceleration = {
      x: 0,
      y: 0.5 - this.position.y / 100
    }
    if (this.removeParticle) {
      deleteParticle(this.id)
    }
  }
}

function newParticle() {
  const curPart = new Particle()
  particles.push(curPart)
}

function deleteParticle(id: number) {
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].id === id) {
      particles[i].removed = true
      particles.splice(i, 1)
    }
  }
}

function drawParticles() {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i]
    const position = particle.position

    context.lineWidth = particle.lineWidth
    context.beginPath()
    context.moveTo(position.x, position.y)
    context.lineTo(position.x, position.y + particle.length)
    context.stroke()
  }
}

function updateParticles() {
  for (let i = 0; i < particles.length; i++) {
    // Update velocity (Acceleration)
    particles[i].velocity.x += particles[i].acceleration.x
    particles[i].velocity.y += particles[i].acceleration.y

    // Update position based on velocity
    particles[i].position.x += particles[i].velocity.x
    particles[i].position.y += particles[i].velocity.y

    // Check current position relative to floor
    checkFloorCollision(i, particles[i].position.y)

    if (particles[i]) {
      // Check next position relative to floor
      const nextPy = particles[i].position.y + particles[i].velocity.y
      checkFloorCollision(i, nextPy)
    }

    if (particles[i]) {
      // Update the length of the rain drop based on velocity
      particles[i].length = particles[i].velocity.y * 1.8

      // The negative length gives the bounce effect, but it buggy, so this resets particles when the length is below -20
      if (particles[i].length <= -20) {
        particles[i].setParticle()
      }
    }

    if (particles[i] && particles[i].removed) {
      particles.splice(i, 1)
    }
  }
}

function checkFloorCollision(index: number, nextPy: number) {
  if (nextPy >= canvas.height * (canvas.height / 15)) {
    particles[index].velocity.y *= -1
    particles[index].velocity.y *= collisionDamper
    particles[index].length = 3
    if (particles[index].velocity.y >= -0.2 && particles[index].velocity.y <= 0.2) {
      particles[index].setParticle()
    }
  }
}

function loop() {
  clear()
  update()
  draw()
  queue()
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
function filterNonRemovable(p: Particle) {
  return !p.removeParticle
}
function removeParticle() {
  const filteredParticles = particles.filter(filterNonRemovable)
  if (filteredParticles[filteredParticles.length - 1]) {
    filteredParticles[filteredParticles.length - 1].removeParticle = true
  }
}

function update() {
  const filteredParticles = particles.filter(filterNonRemovable)
  if (filteredParticles.length < numParticles) {
    newParticle()
  } else if (filteredParticles.length > numParticles) {
    removeParticle()
  }
  updateParticles()
}

function draw() {
  drawParticles()
}

function queue() {
  window.requestAnimationFrame(loop)
}

function startRain() {
  const setInt: number = setInterval(function () {
    if (numParticles < maxParticles) {
      numParticles++
    } else {
      clearInterval(setInt)
      setTimeout(function () {
        stopRain()
      }, 8000)
    }
  }, 20)
}

function stopRain() {
  const setInt: number = setInterval(function () {
    if (numParticles > 10) {
      numParticles--
    } else {
      clearInterval(setInt)
      setTimeout(function () {
        startRain()
      }, 5000)
    }
  }, 50)
}

window.onload = function () {
  setTimeout(function () {
    loop()
    startRain()
  }, 100)
}
