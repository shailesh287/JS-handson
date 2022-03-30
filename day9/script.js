//Objects : Objects are non Primitive data type
//          Objects are in key value pairs

//{}

let person = {
  name: "Shailesh",
  age: 24,
  contact: 1234567890,
};

console.log(person.name); //By using dot notation to access the values of object
console.log(person["age"]); // By using Square brackets and make sure that you are using strings "" when you are accessing the property

//this keyword

const student = {
  id: 47,
  name: "Ram",
  age: 24,
  contact: 123344,
  displayinfo:
    function () //Method : Function inside the Object is called method
    {
      console.log(`my id is ${this.id} my name is ${this.name}`);
    },
};

// student.displayinfo();

const myObjkeys = Object.keys(student); // to get only the keys of the object .
const myObjvalues = Object.values(student); // to get only the values of the object.
console.log(myObjkeys);
console.log(myObjvalues);

//this keyword refers to the global Object

//We can create new Object using an object Constructor also

const myObj = new Object();
myObj.name = "Shailesh";
(myObj["age"] = 24), console.log(myObj);

//Spread Operator : Spread operator is used to shallow Copy Objects

const body = {
  height: 5.51,
  weight: 79,
};

const brain = {
  iq: 100,
};

const person1 = {
  ...body,
  ...brain,
};

console.log(person1);

//Spread Operator is used to destructure an array
const arr = [1, 2, 3, 4, 5, 6];
console.log(...arr);

//Object.create : which will allow us to create an object by taking the reference of an existing object

const flags = Object.create(student);
console.log(flags);
