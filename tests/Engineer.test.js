const Engineer = require('../lib/Engineer')

describe ('engineer set of test', () =>{
    it('Accepts github parameters.', () => {
        const employee = new Engineer ('Alex','1234','alex@email.com','gituser')
    
        expect(employee.github).toBe('gituser');
    });

    it('Returns github parameters.', () => {
        const employee = new Engineer ('Alex','1234','alex@email.com','gituser')
    
        expect(employee.getGitHub()).toBe('gituser');
    });

    it('Returns employee type.', () => {
        const employee = new Engineer ('Alex','1234','alex@email.com')
    
        expect(employee.getRole()).toBe('Engineer');
    });
})