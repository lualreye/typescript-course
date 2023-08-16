"use strict";
class Person {
    constructor(name) {
        this.age = 28;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person();
let add;
add = (a, b) => {
    return a + b;
};
// user1 = {
//   name: 'Luis',
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name)
//   }
// }
console.log(user1);
user1.greet('Hi my name');
