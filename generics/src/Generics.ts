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


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Luis' , hobbies: ['sport'] } , { age: 30 })

console.log(mergedObj.age)

interface Lengthy {
  length: number
}


function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element'
  }
  if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elementes';
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hello there!'))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value ' + obj[key]
}

console.log(extractAndConvert({ name: 'Luis' }, 'name'))

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// const textStorage = new DataStorage<string>();

// textStorage.addItem('Luis')
// textStorage.addItem('Diego')
// console.log(textStorage.getItems())

// const numberStorage = new DataStorage<number>();


// const objStorage = new DataStorage<object>()


interface CourseGoal {
  title: string;
  decription: string;
  completUntil: Date;
}: CourseGoal {
  let courseGoal: CourseGoal = {}
  courseGoal.title = title;
  courseGoal.description = description
}