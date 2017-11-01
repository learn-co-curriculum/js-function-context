// Function Context (Invocation Context)

// 1 - As a function (baseless function)
function thisLogger() {
  console.log(this);
}

// 2 - as a method
// a method is a function that is a property of an object (attached to an object)
const object = {
  nameLogger: function() {
    console.log(this.firstName);
  },
  firstName: 'jason'
};

// 3 - Via a method of the function object
// (call, apply, bind)

// const listEmployees = function() {
//   // here, this is what we want
//   console.log('here, OUTSIDE of the callback to forEach this is: ', this);
//   var self = this;
//   this.employees.forEach(function(employee) {
//     // inside we have lost the context
//     console.log('INSIDE of the callback to forEach self is: ', self);
//     console.log(`Employee: ${employee.name} works at ${self.name}`);
//   });
// };

const listEmployees = function() {
  this.employees.forEach(
    function(employee) {
      console.log(`Employee: ${employee.name} works at ${this.name}`);
    }.bind(this)
  );
};

const tgif = {
  name: "T.G.I. Friday's",
  employees: [{ name: 'Johann' }, { name: 'Rachel' }, { name: 'Max' }],
  listEmployees
};

const chipotle = {
  name: 'Chipotle',
  employees: [{ name: 'Alex' }, { name: 'Esmery' }, { name: 'Meryl' }],
  listEmployees
};

// 4 - As a constructor

// our first shot at making instances of things:

// function restaurantCreator(name) {
//   return {
//     name: name,
//     employees: [],
//     listEmployees: listEmployees,
//     addEmployee: function(name) {
//       this.employees.push({ name: name });
//     }
//   };
// }

// constructor

// function Dog(props) {
//   console.log(this);
//   this.name = props.name;
//   console.log(this);
//   this.color = props.color;
//   console.log(this);
// }
//
// Dog.prototype.bark = function() {
//   console.log('bark');
// };
//
// Dog.thisIsAClassMethod = function(){
//   //...
// }

class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.constructor.all.push(this);
  }

  bark() {
    console.log(`woof! im ${this.name}`);
  }

  static thisIsAClassMethod() {
    console.log('im called on the class');
  }
}

Dog.all = [];

// objects,
// - take up memory
// - data
// - behavior
