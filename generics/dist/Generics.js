"use strict";
// const names: Array<string> = []; // string[]
// names[0].split(' ');
// const promise = new Promise<number>((resolve, _reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000)
// });
// promise.then(data => {
//   // data.split(' ')
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Luis', hobbies: ['sport'] }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elementes';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hello there!'));
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
console.log(extractAndConvert({ name: 'Luis' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
CourseGoal;
{
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
}
