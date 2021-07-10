// @ts-check
/* eslint-disable no-restricted-syntax */

/** 
 * @typeof Person
 * 
 * @property {number} age
 * @property {string} city
 * @property {string | string[]} [pet]
*/

/** @type {Person[]} */
const people = [
  {
    age: 20,
    city: '서울',
    pet: ['cat', 'dog'],
  },
  {
    age: 40,
    city: '부산',
  },
  {
    age: 31,
    city: '대구',
    pet: ['cat', 'dog'],
  },
  {
    age: 36,
    city: '서울',
  },
  {
    age: 27,
    city: '강릉',
    pet: 'cat',
  },
]

/**
 * A. 30대 미만이 한명이라도 사는 모든 도시
 * B. 각 도시별로 개와 고양이를 키우는 사람의 수
 */

function normalFunc() {
  /** @type {string[]} */
  const cities = []

  for (const person of people) {
    if (person.age < 30) {
      if(!cities.find((city) => person.city === city)) {
        cities.push(person.city)
      }
    }
  }

  return cities
}

function modernFunc() {
  // 장점 : 위쪽 로직에 구애받지 않고 진행가능
  const allCities = people.filter((person) => person.age < 30).map((person) => person.city)
  const set = new Set(allCities)
  return Array.from(set)
}

console.log(normalFunc())
console.log(modernFunc())


// * B. 각 도시별로 개와 고양이를 키우는 사람의 수

/** @typeof {Object.<string, Object.<string, number>} PetsOfCities */

function solveB() {
  /** @type {PetsOfCities} */
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person

    if (petOrPets) {
      const petsOfCity = result[city] || {}

      if (typeof petOrPets === 'string') {
        const pet = petOrPets
        
        const origNumPetsOfCity = petsOfCity[pet] || 0
        petsOfCity[pet] = ? petsOfCity[pet] + 1 : 1
      } else {

      }

      result[city] = petsOfCity
    }
  }

  return result
}