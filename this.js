// Function Context (Invocation Context)

// 1 - As a function

// baseless function
function thisLogger() {
  console.log(this);
}

// 2 - As a method

// a function that's a property of an object

const obj = {
  firstName: 'Rachel',
  thisLogger: thisLogger,
  logName: function() {
    return this.firstName;
  }
};

// 3 - Via a method of the function object (call, apply)
function addition(a, b) {
  return a + b;
}

const listEmployees = function() {
  // here, `this` is what we want it to be ...console.log('this outside of the forEach callback: ', this);
  // const that = this;
  // this.employees.forEach(
  //   function(employee) {
  //     // here, we lost `this`... console.log('this INSIDE of the forEach callback: ', this);
  //     console.log(`Restaurant: ${this.name} Employee: ${employee.name}`);
  //   }.bind(this)
  // );

  this.employees.forEach(employee => {
    console.log(`Restaurant: ${this.name} Employee: ${employee.name}`);
  });
};

const tgif = {
  name: "T.G.I. Friday's",
  employees: [{ name: 'Alex' }, { name: 'Terrance' }, { name: 'Daniel' }],
  listEmployees
};

const chipotle = {
  name: 'Chipotle',
  employees: [{ name: 'Tim' }, { name: 'Esmery' }, { name: 'Jason' }],
  listEmployees
};

// 4 - As a constructor

// function Dog(props) {
//   this.name = props.name;
//   this.color = props.color;
// }
//
// Dog.prototype.bark = function() {
//   console.log(`woof! my name is ${this.name}`);
// };

// Dog.classMethod = function() {
//   return 'called on the class';
// };

class Dog {
  constructor(props) {
    this.name = props.name;
    this.color = props.color;
    this.constructor.all.push(this);
  }

  bark() {
    console.log(`woof! my name is ${this.name}`);
  }
}

Dog.all = [];
