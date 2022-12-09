const Intern = require("../lib/Intern.js");

describe('Intern', () => {
    describe('init', () => {
        it('should return an intern\'s name', () => {
            const intern = new Intern('Connor', 1, 'connorcho22@gmail.com', 'UPENN');

        expect(intern.name).toEqual('Connor');
        });

        it('should return an intern\'s id', () => {
            const intern = new Intern('Connor', 1, 'connorcho22@gmail.com', 'UPENN');

        expect(intern.id).toEqual(1);
        });

        it('should return an intern\'s email', () => {
            const intern = new Intern('Connor', 1, 'connorcho22@gmail.com', 'UPENN');

        expect(intern.email).toEqual('connorcho22@gmail.com');
        });

        it('should return an intern\'s school', () => {
            const intern = new Intern('Connor', 1, 'connorcho22@gmail.com', 'UPENN');

        expect(intern.school).toEqual('UPENN');
        });

        it('should return an intern\'s role', () => {
            const intern = new Intern('Connor', 1, 'connorcho22@gmail.com', 'UPENN');

        expect(intern.getRole()).toEqual('Intern');
        });
    })
})