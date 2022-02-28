const Engineer = require('../lib/Employee');

test('creates a engineer object',() => {
    const engineer = new Engineer();

    expect(engineer.name)
    expect(engineer.type)
    expect(engineer.id)
    expect(engineer.email)
    expect(engineer.school)

})