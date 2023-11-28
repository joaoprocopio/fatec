import { Course } from "~/models"

export type TCreateCourse = {
  name: string
  credit: number
}
export const createCourse = ({ name, credit }: TCreateCourse) => {
  return new Course(name, credit)
}
