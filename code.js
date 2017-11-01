const listEmployees = function() {
  this.employees.forEach(employee => {
    console.log(`Employee: ${employee.name}`);
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
