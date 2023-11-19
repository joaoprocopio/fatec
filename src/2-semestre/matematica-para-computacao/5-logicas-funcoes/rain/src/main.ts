const maxParticles = 200
let numParticles = 0
const particles: Particle[] = []
const collisionDamper = 0.1

const canvas = document.getElementById("rain") as HTMLCanvasElement
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

canvas.width = window.innerWidth
canvas.height = window.innerHeight

interface Axis {
  x: number
  y: number
}
interface Coordinates extends Axis {
  z: number
}

class Particle {
  id: number = Date.now()
  removeParticle: boolean = false
  position: Coordinates = {
    x: 0,
    y: 0,
    z: 0
  }
  velocity: Axis = {
    x: 0,
    y: 0
  }
  alpha: number = 1
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
      y: -10 - Math.random() * 50,
      z: Math.random() * 10
    }
    this.lineWidth = 1 - this.position.z / 12
    this.acceleration = {
      x: 0,
      y: 0.8 - this.position.z / 10
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

function deleteParticle(id) {
  for (let i = 0; i < particles.length; i++) {
    if (particles[i].id === id) {
      particles[i].removed = true
      particles.splice(i, 1)
    }
  }
}

function drawParticles() {
  for (let i = 0; i < particles.length; i++) {
    const position = particles[i].position
    ctx.strokeStyle = "rgba(255,255,255," + particles[i].alpha + ")"
    ctx.lineWidth = particles[i].lineWidth
    ctx.beginPath()
    ctx.moveTo(position.x, position.y)
    ctx.lineTo(position.x, position.y + particles[i].length)
    ctx.stroke()
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
      const nextVy = particles[i].velocity.y + particles[i].acceleration.y
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

function checkFloorCollision(i, nextPy) {
  if (nextPy >= canvas.height - particles[i].position.z * (canvas.height / 15)) {
    particles[i].velocity.y *= -1
    particles[i].velocity.y *= collisionDamper
    particles[i].length = 3
    if (particles[i].velocity.y >= -0.2 && particles[i].velocity.y <= 0.2) {
      particles[i].setParticle()
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
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function filterNonRemovable(p) {
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
  let setInt
  setInt = setInterval(function () {
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
  let setInt
  setInt = setInterval(function () {
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
