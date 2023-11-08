const velocity_screen = document.getElementById("velocity_screen") as HTMLCanvasElement
const simulation_context = velocity_screen.getContext("2d") as CanvasRenderingContext2D

function draw_object(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, center: number[], radius: number) {
  const centerX = Math.floor(center[0])
  const centerY = Math.floor(center[1])
  const r = radius
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.beginPath()
  context.arc(centerX, centerY, r, 0, 2 * Math.PI, false)
  context.fillStyle = "white"
  context.fill()
}

function update_coord(coords: number[], v: number[], t: number) {
  coords[0] = Math.floor(coords[0] + v[0] * t)
  coords[1] = Math.floor(coords[1] + v[1] * t)
}

const start_button = document.getElementById("start_button") as HTMLButtonElement
start_button.onclick = function () {
  const velocity_input = document.getElementById("vel") as HTMLInputElement
  const velocity = parseFloat(velocity_input.value)
  const angle_input = document.getElementById("angle") as HTMLInputElement
  const angle = parseFloat(angle_input.value)
  const center: number[] = [0, 0]
  const v: number[] = [0, 0]
  let t: number = 0 // initial time
  const r: number = 10 //circle radius
  const dt: number = 800 //time interval (ms)
  v[0] = velocity * Math.cos((Math.PI * angle) / 180)
  v[1] = velocity * Math.sin((Math.PI * angle) / 180)

  setInterval(function () {
    // coordinate update
    t = (t + dt) / dt
    update_coord(center, v, t)
    draw_object(velocity_screen, simulation_context, center, r)
  }, dt)
}
