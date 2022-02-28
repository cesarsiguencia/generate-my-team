const Generator = require('../lib/Generator');

test('creates a manager object',() => {
    const generator = new Generator();

    expect(generator.managerInfo).toEqual(expect.any(Object));
})

test('creates an array of collagues',() => {
    const generator = new Generator();

    expect(generator.employeesArray).toEqual(expect.any(Array));
})

// test("get's manager's stats in the oobject",() => {
//     const generator = new Generator();

//     expect(generator.managerPrompt()).toHaveProperty(managerInfo);
// })