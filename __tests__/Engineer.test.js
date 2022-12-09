const Engineer = require("../lib/Engineer.js");

describe('Engineer', () => {
    describe('init', () => {
        it('should return an engineer\'s name', () => {
            const engineer = new Engineer('Connor', 1, 'connorcho22@gmail.com', 'connorcho66');

        expect(engineer.name).toEqual('Connor');
        });

        it('should return an engineer\'s id', () => {
            const engineer = new Engineer('Connor', 1, 'connorcho22@gmail.com', 'connorcho66');

        expect(engineer.id).toEqual(1);
        });

        it('should return an engineer\'s email', () => {
            const engineer = new Engineer('Connor', 1, 'connorcho22@gmail.com', 'connorcho66');

        expect(engineer.email).toEqual('connorcho22@gmail.com');
        });

        it('should return an engineer\'s github', () => {
            const engineer = new Engineer('Connor', 1, 'connorcho22@gmail.com', 'connorcho66');

        expect(engineer.github).toEqual('connorcho66');
        });

        it('should return an engineer\'s role', () => {
            const engineer = new Engineer('Connor', 1, 'connorcho22@gmail.com', 'connorcho66');

        expect(engineer.getRole()).toEqual('Engineer');
        });
    })
})