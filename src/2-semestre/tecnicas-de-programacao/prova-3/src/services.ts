import type { TBaseCourse, TBaseStudent } from "~/models"
import { Course, Student } from "~/models"

export const createCourse = ({ name, credit }: TBaseCourse) => {
  return new Course(name, credit)
}

export const createStudent = ({
  name,
  courses: _courses
}: Omit<TBaseStudent, "courses"> & { courses: TBaseCourse[] }) => {
  const courses = _courses.map((course) => createCourse(course))

  return new Student(name, courses)
}
