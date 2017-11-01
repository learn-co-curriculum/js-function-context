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

function addition(a, b) {
  console.log('this is: ', this);
  return a + b;
}

// 4 - As a constructor
