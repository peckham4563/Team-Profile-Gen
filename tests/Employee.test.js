const Employee = require('../lib/Employee')

describe ('employee set of test', () =>{
    it('Accepts name, id, and email parameters.', () => {
        const employee = new Employee ('Alex','1234','alex@email.com')
    
        expect(employee.name).toBe('Alex');
    
        expect(employee.id).toBe('1234');

        expect(employee.email).toBe('alex@email.com')
    });

    it('Returns name, id, and email parameters.', () => {
        const employee = new Employee ('Alex','1234','alex@email.com')
    
        expect(employee.getName()).toBe('Alex');
    
        expect(employee.getId()).toBe('1234');

        expect(employee.getEmail()).toBe('alex@email.com')
    });

    it('Employee constructor makes object.', () => {
        const employee = new Employee ('Alex','1234','alex@email.com')
    
        expect(typeof employee).toBe('object');
    });

    it('Returns employee type.', () => {
        const employee = new Employee ('Alex','1234','alex@email.com')
    
        expect(employee.getRole()).toBe('Employee');
    });
})