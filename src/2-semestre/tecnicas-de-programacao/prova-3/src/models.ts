export type TModel = {
  id: number
}

export type TBaseCourse = {
  name: string
  credit: number
}

export type TCourse = TBaseCourse & TModel

export class Course implements TCourse {
  static count: number = 1

  id: number
  name: string
  credit: number

  constructor(name: string, credit: number) {
    this.id = Course.count++
    this.name = name
    this.credit = credit
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      credit: this.credit
    }
  }

  toString() {
    return Object.values(this).join(",")
  }
}

export type TBaseStudent = {
  name: string
  courses: Course[]
}

export type TStudent = TBaseStudent & TModel

export class Student implements TStudent {
  static count: number = 1

  id: number
  name: string
  courses: Course[]

  constructor(name: string, courses: Course[]) {
    this.id = Student.count++
    this.name = name
    this.courses = courses
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      courses: this.courses.map((course) => course.toJSON())
    }
  }
}
