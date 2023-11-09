const rainingCanvasEl = document.getElementById("rainingCanvas") as HTMLCanvasElement
const velocityInputEl = document.getElementById("velocity") as HTMLInputElement
const angleInputEl = document.getElementById("angle") as HTMLInputElement
const playButtonEl = document.getElementById("playButton") as HTMLButtonElement

const context = rainingCanvasEl.getContext("2d") as CanvasRenderingContext2D

const drawObject = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, center: number[], radius: number) => {
  const centerX = Math.floor(center[0])
  const centerY = Math.floor(center[1])

  context.clearRect(0, 0, canvas.width, canvas.height)
  context.beginPath()
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
  context.fillStyle = "white"
  context.fill()
}

const updateCoordinates = (coords: number[], position: number[], t: number) => {
  coords[0] = Math.floor(coords[0] + position[0] * t)
  coords[1] = Math.floor(coords[1] + position[1] * t)
}

playButtonEl.onclick = () => {
  const velocity = parseFloat(velocityInputEl.value)
  const angle = parseFloat(angleInputEl.value)
  const center: number[] = [0, 0]
  const position: number[] = [0, 0]
  let time: number = 0 // initial time
  const radius: number = 10 // circle radius
  const interval: number = 800 //time interval (ms)

  position[0] = velocity * Math.cos((Math.PI * angle) / 180)
  position[1] = velocity * Math.sin((Math.PI * angle) / 180)

  setInterval(() => {
    time = (time + interval) / interval

    updateCoordinates(center, position, time)
    drawObject(rainingCanvasEl, context, center, radius)
  }, interval)
}
