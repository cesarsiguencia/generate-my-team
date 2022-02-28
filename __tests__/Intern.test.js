const { expect } = require('@jest/globals');
const Intern = require('../lib/Employee');

test('creates a intern object',() => {
    const intern = new Intern();

    expect(intern.name)
    expect(intern.type)
    expect(intern.id)
    expect(intern.email)
    expect(intern.school)

})