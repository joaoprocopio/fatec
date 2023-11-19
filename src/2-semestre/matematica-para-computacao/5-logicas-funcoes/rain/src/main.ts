const rainEl = document.getElementById("rain") as HTMLCanvasElement

const context = rainEl.getContext("2d") as CanvasRenderingContext2D

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

window.onload = () => {
  const velocity = 10.0
  const angle = 90.0
  const center: number[] = [rainEl.width / 2, 0]
  const position: number[] = [0, 0]
  let time: number = 0 // initial time
  const radius: number = 10 // circle radius
  const interval: number = 50 //time interval (ms)

  position[0] = velocity * Math.cos((Math.PI * angle) / 180)
  position[1] = velocity * Math.sin((Math.PI * angle) / 180)

  setInterval(() => {
    time = (time + interval) / interval

    updateCoordinates(center, position, time)
    drawObject(rainEl, context, center, radius)
  }, interval)
}
