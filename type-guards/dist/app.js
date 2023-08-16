"use strict";
var _a;
const e1 = {
    name: 'Luis',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', ' Reyes');
result.split(' ');
const fetchUserData = {
    id: 'u1',
    name: 'LUIS',
    job: {
        title: 'CEO',
        description: 'My own company'
    }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Priviliges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('startDate: ' + emp.startDate);
//   }
// }
// printEmployeeInformation({ name: 'Denisse', startDate: new Date() })
// class Car {
//   drive() {
//     console.log('driving...')
//   }
// }
// class Truck {
//   drive() {
//     console.log('driving...')
//   }
//   loadCargo(amount: number) {
//     console.log('loading cargo ' + amount)
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//   type: 'Bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'Horse';
//   runningSpeed: number
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'Bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'Horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }
// moveAnimal({ type: 'Bird', flyingSpeed: 50 })
// // const input = <HTMLInputElement>document.getElementById('message-output')!;
// const userInput = document.getElementById('user-input')! as HTMLInputElement;
// userInput.value = 'Hi there!';
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a capital letter'
// }
