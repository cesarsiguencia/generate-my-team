const Employee = require('../lib/Employee');

test('creates a manager object',() => {
    const employee = new Employee();

    expect(employee.name)
    expect(employee.id)
    expect(employee.email)
    expect(employee.intern)
    expect(employee.manager)
    expect(employee.engineer)
})