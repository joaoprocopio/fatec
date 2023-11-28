import { Router } from "express"

import { createCourse } from "~/services"
import { HttpStatus } from "@/http"

export const router = Router()

router.get("/courses/:name/:credit", (req, res) => {
  const params = req.params

  const course = createCourse({
    name: params.name,
    credit: parseInt(params.credit)
  })

  res.status(HttpStatus.Ok).send(course.toJSON())
})
