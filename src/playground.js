const developer = {
  salary: 100000,
  experience: 5,
  techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2
    this.lookingForWork = this.lookingForWork = false
  }
}

console.log(developer.salary)
console.log(developer.lookingForWork)

developer.doubleSalary()

console.log(developer.salary)
console.log(developer.lookingForWork)
