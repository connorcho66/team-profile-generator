const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Init", () => {
        it('Should return employee name', () => {
            const employee = new Employee('Connor', 1, 'connorcho22@gmail.com');

            expect(employee.getName()).toEqual('Connor')
        })

        it('Should return employee id', () => {
            const employee = new Employee('Connor', 1, 'connorcho22@gmail.com');

            expect(employee.getId()).toEqual(1)
        })

        it('Should return employee email', () => {
            const employee = new Employee('Connor', 1, 'connorcho22@gmail.com');

            expect(employee.getEmail()).toEqual('connorcho22@gmail.com')
        })

        it('Should return employee role', () => {
            const employee = new Employee('Connor', 1, 'connorcho22@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})