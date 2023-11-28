import { Router } from "express"

import type { TBaseCourse } from "~/models"
import { createCourse, createStudent } from "~/services"

import { HttpStatus } from "@/http"

export const router = Router()

router.get("/course/:name/:credit", (req, res) => {
  const params = req.params

  const course = createCourse({
    name: params.name,
    credit: parseInt(params.credit)
  })

  return res.status(HttpStatus.Ok).send(course.toJSON())
})

router.get("/student", (req, res) => {
  const body = req.body as { name: string; courses: TBaseCourse[] }

  const student = createStudent(body)

  return res.status(HttpStatus.Ok).send(student.toJSON())
})
