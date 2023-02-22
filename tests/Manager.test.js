const Manager = require('../lib/Manager')

describe ('Manager set of test', () =>{
    it('Accepts office number parameters.', () => {
        const employee = new Manager ('Alex','1234','alex@email.com','officeNumber')
    
        expect(employee.officeNumber).toBe('officeNumber');
    });

    it('Returns school parameters.', () => {
        const employee = new Manager ('Alex','1234','alex@email.com','officeNumber')
    
        expect(employee.getOfficeNumber()).toBe('officeNumber');
    });

    it('Returns employee type.', () => {
        const employee = new Manager ('Alex','1234','alex@email.com')
    
        expect(employee.getRole()).toBe('Manager');
    });
})