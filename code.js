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
// const listEmployees = function() {
//   this.employees.forEach(employee => {
//     console.log(`Employee: ${employee.name} works at ${this.name}`);
//   });
// };
//
// const tgif = {
//   name: "T.G.I. Friday's",
//   employees: [{ name: 'Johann' }, { name: 'Rachel' }, { name: 'Max' }],
//   listEmployees
// };
//
// const chipotle = {
//   name: 'Chipotle',
//   employees: [{ name: 'Alex' }, { name: 'Esmery' }, { name: 'Meryl' }],
//   listEmployees
// };
