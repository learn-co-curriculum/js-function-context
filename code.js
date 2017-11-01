const listEmployees = function() {
  this.employees.forEach(function(employee) {
    console.log(`Employee: ${employee.name} works at ${this.name}`);
  });
};

const tgif = {
  name: "T.G.I. Friday's",
  employees: [{ name: 'Johann' }, { name: 'Rachel' }, { name: 'Max' }],
  listEmployees: listEmployees
};

const chipotle = {
  name: 'Chipotle',
  employees: [{ name: 'Alex' }, { name: 'Esmery' }, { name: 'Meryl' }],
  listEmployees: listEmployees
};
