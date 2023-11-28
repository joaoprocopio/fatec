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
