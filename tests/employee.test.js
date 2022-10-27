// bring in employee
const Employee = require('lib/employee.js');

// test for instantiating an Employee instance
test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

// tests for setters
test('Can set name via constructor arguments', () => {
    // variable for name
    // variable for new Employee(passing in the variable for name here)
    // set up your expect and toBe
});

test('Can set id via constructor argument', () => {
    // variable for the test value, in this case a number since it's an id
    const testValue = 100;
    // variable for new Employee('example name as a string', testValue)
    const e = new Employee('Foo', testValue);
    // set up your expect and toBe
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    // variable for test value
    // variable for new Employee('example name', example number, test value)
    // set up your expect and toBe
});

// test for getters
test('Can get name via getName()', () => {
    // variable for test value
    const testValue = 'Alice';
    // variable for new Employee(testValue)
    const e = new Employee(testValue);
    // expect using the getter and then your toBe
    expect(e.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
    // testValue
    // new Employee('example name', testValue)
    // expect and toBe 
});

test('Can get id via getEmail()', () => {
    // testValue
    // new Employee('example name', testValue)
    // expect and toBe 
});

test('getRole() should return \'Employee\'', () => {

});