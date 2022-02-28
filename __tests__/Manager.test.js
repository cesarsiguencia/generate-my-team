const Manager = require('../lib/Employee');

test('creates a engineer object',() => {
    const manager = new Manager();

    expect(manager.name)
    expect(manager.type)
    expect(manager.id)
    expect(manager.email)
    expect(manager.office)
})