import type { TBaseCourse } from "~/models"
import { Course } from "~/models"

export const createCourse = ({ name, credit }: TBaseCourse) => {
  return new Course(name, credit)
}
