export type Person = {
  name: string
  age: number
}

export const sayHello = (person: Person) => {
  console.log("Hello, world!")
  console.log(`My name is ${person.name}`)
  console.log(`I am ${person.age} years old`)
}

export const sayGoodbye = (person: Person) => {
  console.log("Goodbye, world!")
  console.log(`My name is ${person.name}`)
  console.log(`I am ${person.age} years old`)
}
