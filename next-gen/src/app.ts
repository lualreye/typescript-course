// const add = (a: number, b: number) => a + b;


// console.log(add(2, 1))


// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

const hobbies = ['sports', 'cooking'];

// const activeHobbies = ['Hiking', ...hobbies];

// // activeHobbies.push(...hobbies)

// const person = {
//   name: 'Luis',
//   age: 30
// }

// const copiedPerson = { ...person };

// const add = (...numbers: number[]) => {
//   numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0)
// };

// const addedNumbers = add(10, 5, 5, 2, 5);

// const hobbies1 = hobbies[0]

const [hobbiy1, hobbie2, ...remainingHobbie] = hobbies;

console.log(hobbiy1)