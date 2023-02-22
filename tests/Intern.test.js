const Intern = require('../lib/Intern')

describe ('Intern set of test', () =>{
    it('Accepts school parameters.', () => {
        const employee = new Intern ('Alex','1234','alex@email.com','internSchool')
    
        expect(employee.school).toBe('internSchool');
    });

    it('Returns school parameters.', () => {
        const employee = new Intern ('Alex','1234','alex@email.com','internSchool')
    
        expect(employee.getSchool()).toBe('internSchool');
    });

    it('Returns employee type.', () => {
        const employee = new Intern ('Alex','1234','alex@email.com')
    
        expect(employee.getRole()).toBe('Intern');
    });
})