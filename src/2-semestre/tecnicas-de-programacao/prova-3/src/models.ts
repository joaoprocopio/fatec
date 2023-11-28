export class Course {
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
}
