import { format } from "./1-formatar"

const cars = ["Gol", "Corsa", "Uno", "Fiesta"]
const bikes = ["CG", "XRE", "Biz"]
const vehicles = [...cars, ...bikes]

vehicles.forEach((vehicle) => console.log(format(vehicle)))
