class Student {
  fullName: string; 
  constructor(public firstName: string, public middileInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middileInitial} ${lastName}`
  }
}
  
interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  const { firstName, lastName } = person
  return `Hello, ${firstName} ${lastName}`
}

let user = new Student('Lilit', 'X.', 'Modi')

document.body.innerHTML = greeter(user)