type Admin = {
  name: string,
  priviliges: string[]
}

type Employee = {
  name: string,
  startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Luis',
  priviliges: ['create-server'],
  startDate: new Date()
}

