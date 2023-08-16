interface Named {
  readonly name?: string
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 28;

  constructor(name?: string) {
    if (name) {
      this.name = name
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi')
    }
  }
}

let user1: Greetable

user1 = new Person();

interface addFn {
  (a: number, b: number): number
}

let add: addFn;

add = (a: number, b: number) => {
  return a + b
}

// user1 = {
//   name: 'Luis',
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   }
// }

console.log(user1)

user1.greet('Hi my name')