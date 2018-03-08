class Student {
  name: string;
  constructor(public firstname, public middle, public familyname) {
    this.name = `${firstname} ${middle} ${familyname}`
  }
}

interface Person {
  firstname: string,
  familyname: string
}


let greeter = function (person: Person) {
  let text = 'Hellow ' + person.firstname + person.familyname
  console.dir(text)
  return text
}

let user = new Student('kao', 'cao', 'ri')

console.log(user)
greeter(user)