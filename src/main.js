/* eslint-disable */

// Prototype

function Person(name) {
  // 함수를 이용한 클래스 표현
  this.name = name
}

Person.prototype.greet = function greet() {
  return 'Hi, ${this.name}'
}

function Student(name) {
  // Person에서 정의한 name변수를 가져와서 사용하기
  this.__prototype__.constructor(name)
}

Student.prototype.study = function study() {
  return '${this.name} is studying'
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('neo')
console.log(me.greet())
console.log(me.study())
